import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import {
  CreateStudentDto,
  InlineCreateContactDto,
} from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { FilterStudentDto } from './dto/filter-student.dto';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import { EnrollmentIdService } from '../common/services/enrollment-id.service';
import { ContactTypes } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class StudentsService {
  constructor(
    private readonly prisma: DatabaseService,
    private readonly enrollmentIdService: EnrollmentIdService,
  ) {}

  private async createInlineContact(
    prisma: any,
    nc: InlineCreateContactDto,
    academyId: string,
    seqNumber: number,
  ): Promise<string> {
    if (!nc.phoneNumber || !nc.whatsappPhoneNumber) {
      throw new ConflictException(
        `phoneNumber and whatsappPhoneNumber are required when creating a new contact (name: ${nc.name} ${nc.surname}).`,
      );
    }

    const enrollmentId = await this.enrollmentIdService.generate(prisma, academyId, seqNumber);

    const hashedPassword = await bcrypt.hash('TrickTrackerTemp123!', 10);
    const newUser = await prisma.user.create({
      data: {
        email: nc.email || null,
        loginId: enrollmentId,
        passwordHash: hashedPassword,
        roles: ['PARENT'],
      },
    });

    const contact = await prisma.contact.create({
      data: {
        name: nc.name,
        surname: nc.surname,
        phoneNumber: nc.phoneNumber,
        whatsappPhoneNumber: nc.whatsappPhoneNumber,
        secondaryPhoneNumber: nc.secondaryPhoneNumber,
        email: nc.email || null,
        type: nc.relation ? [nc.relation] : [ContactTypes.PARENT],
        academyId,
        enrollmentId,
        userId: newUser.id,
      },
    });
    return contact.id;
  }

  async findAll(paginationQuery: PaginationQueryDto, academyId: string) {
    const { page = 1, limit = 10 } = paginationQuery;
    const skip = (page - 1) * limit;

    const where: any = { isActive: true, academyId };

    const [total, students] = await Promise.all([
      this.prisma.student.count({ where }),
      this.prisma.student.findMany({
        where,
        skip,
        take: limit,
        include: {
          studentContacts: true,
          studentPrograms: true,
          user: true,
        },
        orderBy: { createdAt: 'desc' },
      }),
    ]);

    const lastPage = Math.ceil(total / limit);

    return {
      data: students.map((student) => {
        const { user, ...rest } = student;
        return { ...rest, email: user?.email || null };
      }),
      meta: { total, page, lastPage, limit },
    };
  }

  async filter(filterDto: FilterStudentDto, academyId: string) {
    const { fullname } = filterDto;

    const where: any = { isActive: true, academyId };

    if (fullname) {
      where.OR = [
        { name: { contains: fullname, mode: 'insensitive' } },
        { surname: { contains: fullname, mode: 'insensitive' } },
      ];
    }

    const students = await this.prisma.student.findMany({
      where,
      include: { user: true },
    });

    return students.map((student) => {
      const { user, ...rest } = student;
      return { ...rest, email: user?.email || null };
    });
  }

  async findOne(id: string, academyId: string) {
    const student = await this.prisma.student.findFirst({
      where: {
        OR: [{ id }, { userId: id }],
        academyId,
      },
      include: {
        studentContacts: { include: { contact: { include: { user: { select: { email: true } } } } } },
        studentPrograms: {
          include: {
            programLocation: {
              include: {
                program: { select: { id: true, name: true } },
                location: { select: { id: true, name: true } },
              },
            },
          },
        },
      },
    });

    if (!student) throw new NotFoundException('Student not found.');
    return student;
  }

  async addContactToStudent(
    studentId: string,
    contactId: string,
    academyId: string,
    relation: ContactTypes = ContactTypes.PARENT,
  ) {
    const studentExists = await this.findOne(studentId, academyId);

    const contactExists = await this.prisma.contact.findFirst({
      where: {
        OR: [{ id: contactId }, { userId: contactId }],
        academyId,
      },
    });

    if (!contactExists) throw new NotFoundException('Contact not found.');

    return this.prisma.studentContact.upsert({
      where: {
        studentId_contactId: {
          studentId: studentExists.id,
          contactId: contactExists.id,
        },
      },
      update: { relation },
      create: {
        studentId: studentExists.id,
        contactId: contactExists.id,
        relation,
      },
    });
  }

  async update(id: string, updateStudentDto: UpdateStudentDto, academyId: string) {
    const studentExists = await this.findOne(id, academyId);

    return this.prisma.student.update({
      where: { id: studentExists.id },
      data: {
        name: updateStudentDto.name,
        surname: updateStudentDto.surname,
        type: updateStudentDto.type,
        dob: updateStudentDto.dob ? new Date(updateStudentDto.dob) : undefined,
        injuries: updateStudentDto.injuries
          ? { push: updateStudentDto.injuries }
          : undefined,
        phoneNumber: updateStudentDto.phoneNumber,
        secondaryPhoneNumber: updateStudentDto.secondaryPhoneNumber,
        whatsappPhoneNumber: updateStudentDto.whatsappPhoneNumber,
        school: updateStudentDto.school,
        userId: updateStudentDto.userId,
      },
    });
  }

  async remove(id: string, academyId: string) {
    const studentExists = await this.findOne(id, academyId);

    return this.prisma.student.update({
      where: { id: studentExists.id },
      data: { isActive: false },
    });
  }

  async hardRemove(id: string, academyId: string) {
    const studentExists = await this.findOne(id, academyId);

    return this.prisma.student.delete({
      where: { id: studentExists.id },
    });
  }

  async create(createStudentDto: CreateStudentDto, academyId: string) {
    const {
      email,
      password,
      roles,
      userId,
      enrollmentId: customEnrollmentSequence,
      contacts,
      contactIds,
      newContacts,
      ...studentData
    } = createStudentDto;

    return this.prisma.$transaction(async (prisma) => {
      let finalUserId = userId;

      const academy = await prisma.academy.findUnique({
        where: { id: academyId },
        select: { seqNumber: true },
      });
      if (!academy?.seqNumber) {
        throw new InternalServerErrorException('Academy enrollment ID not initialized.');
      }

      const loginId = await this.enrollmentIdService.generate(
        prisma,
        academyId,
        academy.seqNumber,
        customEnrollmentSequence,
      );

      if (email) {
        const existingStudent = await prisma.student.findFirst({
          where: { academyId, isActive: true, user: { email } },
        });
        if (existingStudent) throw new ConflictException('A student with this email already exists in this academy.');

        const finalPassword = password || 'TrickTrackerTemp123!';
        const hashedPassword = await bcrypt.hash(finalPassword, 10);

        const newUser = await prisma.user.create({
          data: { email, loginId, passwordHash: hashedPassword, roles: roles || ['STUDENT'] },
        });
        finalUserId = newUser.id;
      } else if (userId) {
        const existingUser = await prisma.user.findUnique({ where: { id: userId } });
        if (!existingUser) throw new ConflictException('A user with this ID does not exist in the system.');

        const existingStudent = await prisma.student.findUnique({ where: { userId } });
        if (existingStudent) throw new ConflictException('This user already has a student profile.');

        if (!existingUser.loginId) {
          await prisma.user.update({ where: { id: userId }, data: { loginId } });
        }
      } else {
        const finalPassword = password || 'TrickTrackerTemp123!';
        const hashedPassword = await bcrypt.hash(finalPassword, 10);

        const newUser = await prisma.user.create({
          data: { loginId, passwordHash: hashedPassword, roles: roles || ['STUDENT'] },
        });
        finalUserId = newUser.id;
      }

      const student = await prisma.student.create({
        data: {
          ...studentData,
          dob: new Date(studentData.dob),
          userId: finalUserId,
          academyId,
          enrollmentId: loginId,
        },
        include: { user: true },
      });

      if (contacts && contacts.length > 0) {
        for (const c of contacts) {
          await prisma.studentContact.create({
            data: {
              studentId: student.id,
              contactId: c.contactId,
              relation: c.relation || ContactTypes.PARENT,
            },
          });
        }
      }

      if (contactIds && contactIds.length > 0) {
        for (const contactId of contactIds) {
          await prisma.studentContact.upsert({
            where: { studentId_contactId: { studentId: student.id, contactId } },
            update: {},
            create: { studentId: student.id, contactId, relation: ContactTypes.PARENT },
          });
        }
      }

      if (newContacts && newContacts.length > 0) {
        for (const nc of newContacts) {
          let contactId: string;

          if (nc.email) {
            const existing = await prisma.contact.findFirst({
              where: {
                academyId,
                isActive: true,
                OR: [{ email: nc.email }, { user: { email: nc.email } }],
              },
            });

            if (existing) {
              contactId = existing.id;
            } else {
              contactId = await this.createInlineContact(prisma, nc, academyId, academy.seqNumber);
            }
          } else {
            contactId = await this.createInlineContact(prisma, nc, academyId, academy.seqNumber);
          }

          await prisma.studentContact.upsert({
            where: { studentId_contactId: { studentId: student.id, contactId } },
            update: { relation: nc.relation || ContactTypes.PARENT },
            create: { studentId: student.id, contactId, relation: nc.relation || ContactTypes.PARENT },
          });
        }
      }

      const finalStudent = await prisma.student.findUnique({
        where: { id: student.id },
        include: {
          user: true,
          studentContacts: { include: { contact: true } },
        },
      });

      if (!finalStudent) throw new NotFoundException('Failed to retrieve the created student.');

      const { user, ...rest } = finalStudent;
      return { ...rest, email: user?.email ?? null, loginId: user?.loginId ?? null };
    });
  }
}
