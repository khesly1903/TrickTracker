import {
  Injectable,
  ConflictException,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateStudentProgramDto } from './dto/create-student-program.dto';
import { StudentProgramSkillsService } from '../student-program-skills/student-program-skills.service';
import { DiscountType, PriceKind, ScheduleType, MonthlyBillingMode } from '@prisma/client';
import { calculateFinalPrice, calculateBaseTotal, applyDiscount, buildBillingPeriods, BillingPeriod } from '../common/utils/pricing.util';

@Injectable()
export class StudentProgramsService {
  constructor(
    private readonly prisma: DatabaseService,
    private readonly studentProgramSkillsService: StudentProgramSkillsService,
  ) {}

  async enroll(createDto: CreateStudentProgramDto, academyId: string) {
    const existing = await this.prisma.studentProgram.findUnique({
      where: {
        studentId_programLocationId: {
          studentId: createDto.studentId,
          programLocationId: createDto.programLocationId,
        },
      },
    });

    if (existing) throw new ConflictException('Student is already enrolled in this program.');

    const student = await this.prisma.student.findFirst({
      where: { id: createDto.studentId, academyId },
    });
    if (!student || !student.isActive) throw new NotFoundException('Student not found or inactive.');

    const programLocation = await this.prisma.programLocation.findFirst({
      where: { id: createDto.programLocationId, program: { academyId } },
      include: {
        program: true,
        _count: { select: { studentPrograms: { where: { isActive: true } } } },
      },
    });

    if (!programLocation) throw new NotFoundException('Program location not found.');

    if (programLocation.program.endDate < new Date()) {
      throw new BadRequestException('This program has already ended.');
    }

    if (programLocation._count.studentPrograms >= programLocation.capacity) {
      throw new ConflictException('Program location is at full capacity.');
    }

    const enrollmentStart = createDto.enrollmentStartDate
      ? new Date(createDto.enrollmentStartDate)
      : new Date();

    let pricingData: {
      priceOptionId?: string;
      basePriceSnapshot?: number;
      priceKindSnapshot?: PriceKind;
      sessionsCoveredSnapshot?: number;
      monthlyBillingModeSnapshot?: MonthlyBillingMode;
      discountId?: string;
      discountSnapshot?: object;
      finalPrice?: number;
    } = {};

    if (createDto.priceOptionId) {
      const priceOption = await this.prisma.priceOption.findFirst({
        where: { id: createDto.priceOptionId, programLocationId: createDto.programLocationId },
      });
      if (!priceOption) throw new NotFoundException('Price option not found for this location.');

      if (priceOption.kind === PriceKind.MONTHLY && !priceOption.billingMode) {
        throw new BadRequestException('Selected MONTHLY price option is missing billingMode.');
      }

      let baseTotal: number;
      if (priceOption.kind === PriceKind.MONTHLY) {
        baseTotal = createDto.overrideBasePrice ?? priceOption.amount;
      } else {
        const remainingSessions = await this.prisma.programSession.count({
          where: {
            programLocationId: createDto.programLocationId,
            type: ScheduleType.CLASS,
            date: { gte: enrollmentStart, lte: programLocation.program.endDate },
          },
        });
        baseTotal = calculateBaseTotal({
          amount: priceOption.amount,
          kind: priceOption.kind,
          sessionsCovered: priceOption.sessionsCovered,
          remainingSessions,
          overrideBasePrice: createDto.overrideBasePrice,
        });
      }

      let discountData: { id: string; value: number; type: string; name: string } | null = null;

      if (createDto.discountId) {
        const override = await this.prisma.discountOverride.findUnique({
          where: {
            discountId_programLocationId: {
              discountId: createDto.discountId,
              programLocationId: createDto.programLocationId,
            },
          },
          include: { discount: true },
        });

        if (override && override.isEnabled) {
          discountData = {
            id: override.discountId,
            value: override.valueOverride ?? override.discount.value,
            type: override.typeOverride ?? override.discount.type,
            name: override.discount.name,
          };
        } else if (!override) {
          const discount = await this.prisma.discount.findFirst({
            where: { id: createDto.discountId, academyId, isActive: true },
          });
          if (discount) {
            discountData = { id: discount.id, value: discount.value, type: discount.type, name: discount.name };
          }
        }
      }

      const finalPrice = discountData
        ? applyDiscount(baseTotal, { value: discountData.value, type: discountData.type as DiscountType })
        : baseTotal;

      pricingData = {
        priceOptionId: priceOption.id,
        basePriceSnapshot: baseTotal,
        priceKindSnapshot: priceOption.kind as PriceKind,
        sessionsCoveredSnapshot: priceOption.kind === PriceKind.MONTHLY
          ? undefined
          : priceOption.sessionsCovered ?? undefined,
        monthlyBillingModeSnapshot: priceOption.kind === PriceKind.MONTHLY
          ? (priceOption.billingMode as MonthlyBillingMode)
          : undefined,
        ...(discountData && {
          discountId: discountData.id,
          discountSnapshot: { name: discountData.name, value: discountData.value, type: discountData.type },
        }),
        finalPrice,
      };
    }

    const enrollment = await this.prisma.studentProgram.create({
      data: {
        studentId: createDto.studentId,
        programLocationId: createDto.programLocationId,
        enrolledAt: enrollmentStart,
        ...pricingData,
      },
    });

    const skillResult = await this.studentProgramSkillsService.populateForEnrollment(enrollment.id);

    return { enrollment, skillsPopulated: skillResult.count };
  }

  async findAll(academyId: string, studentId?: string, programLocationId?: string) {
    const where: any = {
      isActive: true,
      student: { academyId },
    };
    if (studentId) where.studentId = studentId;
    if (programLocationId) where.programLocationId = programLocationId;

    return this.prisma.studentProgram.findMany({
      where,
      include: {
        student: { select: { id: true, name: true, surname: true } },
        programLocation: {
          include: {
            program: { select: { id: true, name: true } },
            location: true,
          },
        },
        priceOption: true,
        discount: true,
      },
    });
  }

  async findOne(id: string, academyId: string) {
    const enrollment = await this.prisma.studentProgram.findFirst({
      where: { id, student: { academyId } },
      include: {
        student: true,
        programLocation: {
          include: { program: true, location: true },
        },
        studentProgramSkills: {
          include: { programSkill: true },
        },
        priceOption: true,
        discount: true,
        payments: { orderBy: { paidAt: 'desc' } },
      },
    });

    if (!enrollment) throw new NotFoundException('Enrollment not found.');
    return enrollment;
  }

  async getBalance(id: string, academyId: string) {
    const enrollment = await this.prisma.studentProgram.findFirst({
      where: { id, student: { academyId } },
      include: {
        payments: true,
        programLocation: { include: { program: { select: { endDate: true } } } },
      },
    });
    if (!enrollment) throw new NotFoundException('Enrollment not found.');

    const totalPaid = enrollment.payments.reduce((sum, p) => {
      return p.type === 'REFUND' ? sum - p.amount : sum + p.amount;
    }, 0);

    const finalPrice = enrollment.finalPrice ?? 0;
    let monthlySchedule: BillingPeriod[] | undefined;
    let totalExpected = finalPrice;

    if (
      enrollment.priceKindSnapshot === PriceKind.MONTHLY &&
      enrollment.monthlyBillingModeSnapshot &&
      enrollment.basePriceSnapshot != null &&
      enrollment.programLocation?.program?.endDate
    ) {
      const ds = enrollment.discountSnapshot as { value: number; type: 'PERCENTAGE' | 'FLAT' } | null;
      monthlySchedule = buildBillingPeriods({
        monthlyAmount: enrollment.basePriceSnapshot,
        billingMode: enrollment.monthlyBillingModeSnapshot,
        enrolledAt: enrollment.enrolledAt,
        programEndDate: enrollment.programLocation.program.endDate,
        discount: ds ? { value: ds.value, type: ds.type as DiscountType } : null,
      });
      totalExpected = parseFloat(monthlySchedule.reduce((s, p) => s + p.amount, 0).toFixed(2));
    }

    return {
      finalPrice,
      totalExpected,
      totalPaid,
      balance: totalExpected - totalPaid,
      monthlySchedule,
    };
  }

  async remove(id: string, academyId: string) {
    const existing = await this.findOne(id, academyId);
    return this.prisma.studentProgram.update({
      where: { id: existing.id },
      data: { isActive: false },
    });
  }

  async hardRemove(id: string, academyId: string) {
    const existing = await this.findOne(id, academyId);
    return this.prisma.studentProgram.delete({ where: { id: existing.id } });
  }
}
