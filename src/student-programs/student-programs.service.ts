import {
  Injectable,
  ConflictException,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateStudentProgramDto } from './dto/create-student-program.dto';
import { StudentProgramSkillsService } from '../student-program-skills/student-program-skills.service';

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

    const enrollment = await this.prisma.studentProgram.create({ data: createDto });

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
      },
    });

    if (!enrollment) throw new NotFoundException('Enrollment not found.');
    return enrollment;
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
