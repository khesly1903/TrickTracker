import {
  ConflictException,
  Injectable,
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
import { ContactTypes } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class StudentsService {
  constructor(private readonly prisma: DatabaseService) {}

  private async createInlineContact(
    prisma: any,
    nc: InlineCreateContactDto,
  ): Promise<string> {
    if (!nc.phoneNumber || !nc.whatsappPhoneNumber) {
      throw new ConflictException(
        `phoneNumber and whatsappPhoneNumber are required when creating a new contact (name: ${nc.name} ${nc.surname}).`,
      );
    }

    const contact = await prisma.contact.create({
      data: {
        name: nc.name,
        surname: nc.surname,
        phoneNumber: nc.phoneNumber,
        whatsappPhoneNumber: nc.whatsappPhoneNumber,
        secondaryPhoneNumber: nc.secondaryPhoneNumber,
        email: nc.email || null,
        type: nc.type || [ContactTypes.PARENT],
      },
    });
    return contact.id;
  }

  /**
   * Retrieves active students with pagination.
   * @param paginationQuery Page and limit for pagination.
   * @returns Paginated students and metadata.
   */
  async findAll(paginationQuery: PaginationQueryDto) {
    const { page = 1, limit = 10 } = paginationQuery;
    const skip = (page - 1) * limit;

    const where: any = {
      isActive: true,
    };

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
        orderBy: {
          createdAt: 'desc',
        },
      }),
    ]);

    const lastPage = Math.ceil(total / limit);

    return {
      data: students.map((student) => {
        const { user, ...rest } = student;
        return {
          ...rest,
          email: user?.email || null,
        };
      }),
      meta: {
        total,
        page,
        lastPage,
        limit,
      },
    };
  }

  /**
   * Filters students by name or surname.
   * @param filterDto Contains the fullname filter.
   * @returns A list of filtered students.
   */
  async filter(filterDto: FilterStudentDto) {
    const { fullname } = filterDto;

    const where: any = {
      isActive: true, // non soft-delete ones
    };

    if (fullname) {
      // both name or surname
      where.OR = [
        { name: { contains: fullname, mode: 'insensitive' } },
        { surname: { contains: fullname, mode: 'insensitive' } },
      ];
    }

    const students = await this.prisma.student.findMany({
      where,
      include: {
        user: true,
      },
    });

    return students.map((student) => {
      const { user, ...rest } = student;
      return {
        ...rest,
        email: user?.email || null,
      };
    });
  }

  /**
   * Finds a student by their ID or associated User ID.
   * @param id The Student ID or User ID.
   * @returns The student object.
   * @throws NotFoundException if student is not found.
   */
  async findOne(id: string) {
    const student = await this.prisma.student.findFirst({
      where: {
        OR: [{ id: id }, { userId: id }],
      },
      include: {
        studentContacts: true,
        studentPrograms: true,
      },
    });

    if (!student) {
      throw new NotFoundException('Student not found.');
    }

    return student;
  }

  /**
   * Establishes a connection between a student and a contact.
   * @param studentId The ID of the student.
   * @param contactId The ID of the contact.
   * @returns The created StudentContact record.
   * @throws NotFoundException if student or contact is not found.
   */
  async addContactToStudent(
    studentId: string,
    contactId: string,
    relation: ContactTypes = ContactTypes.PARENT,
  ) {
    const studentExists = await this.findOne(studentId);
    // findOne already throws if student doesn't exist

    const contactExists = await this.prisma.contact.findFirst({
      where: {
        OR: [{ id: contactId }, { userId: contactId }],
      },
    });

    if (!contactExists) {
      throw new NotFoundException('Contact not found.');
    }

    return this.prisma.studentContact.upsert({
      where: {
        studentId_contactId: {
          studentId: studentExists.id,
          contactId: contactExists.id,
        },
      },
      update: {
        relation: relation,
      },
      create: {
        studentId: studentExists.id,
        contactId: contactExists.id,
        relation: relation,
      },
    });
  }

  /**
   * Updates a student's profile information.
   * @param id The student ID.
   * @param updateStudentDto Data to update.
   * @returns The updated student.
   * @throws NotFoundException if student is not found.
   */
  async update(id: string, updateStudentDto: UpdateStudentDto) {
    const studentExists = await this.findOne(id);
    // findOne already throws if student doesn't exist

    return this.prisma.student.update({
      where: {
        id: studentExists.id,
      },
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

  /**
   * Soft-deletes a student by setting isActive to false.
   * @param id The student ID.
   * @returns The updated student.
   * @throws NotFoundException if student is not found.
   */
  async remove(id: string) {
    const studentExists = await this.findOne(id);

    if (!studentExists) {
      throw new NotFoundException('Student not found.');
    }

    // Soft delete: Sadece isActive alanını false yapıyoruz.
    return this.prisma.student.update({
      where: {
        id: studentExists.id,
      },
      data: {
        isActive: false,
      },
    });
  }

  /**
   * Permanently deletes a student record.
   * @param id The student ID.
   * @returns The deleted student.
   * @throws NotFoundException if student is not found.
   */
  async hardRemove(id: string) {
    const studentExists = await this.findOne(id);

    if (!studentExists) {
      throw new NotFoundException('Student not found.');
    }

    return this.prisma.student.delete({
      where: {
        id: studentExists.id,
      },
    });
  }

  /**
   * Creates a new student profile linked to an existing user.
   * @param createStudentDto Data to create the student.
   * @returns The created student profile.
   * @throws ConflictException if user ID is missing or student already exists.
   */
  async create(createStudentDto: CreateStudentDto) {
    const {
      email,
      password,
      roles,
      userId,
      contacts,
      contactIds,
      newContacts,
      ...studentData
    } = createStudentDto;

    return this.prisma.$transaction(async (prisma) => {
      let finalUserId = userId;

      // 1. If email is provided, create a new user
      if (email) {
        const existingUser = await prisma.user.findUnique({
          where: { email },
        });

        if (existingUser) {
          throw new ConflictException('A user with this email already exists.');
        }

        const saltRounds = 10;
        // Use provided password or a default temporary one if missing
        const finalPassword = password || 'TrickTrackerTemp123!';
        const hashedPassword = await bcrypt.hash(finalPassword, saltRounds);

        const newUser = await prisma.user.create({
          data: {
            email,
            passwordHash: hashedPassword,
            roles: roles || ['STUDENT'],
          },
        });
        finalUserId = newUser.id;
      } else if (userId) {
        // 2. If only userId is provided, check if user exists
        const existingUser = await prisma.user.findUnique({
          where: { id: userId },
        });

        if (!existingUser) {
          throw new ConflictException(
            'A user with this ID does not exist in the system.',
          );
        }

        const existingStudent = await prisma.student.findUnique({
          where: { userId },
        });

        if (existingStudent) {
          throw new ConflictException(
            'This user already has a student profile.',
          );
        }
      }

      const student = await prisma.student.create({
        data: {
          ...studentData,
          dob: new Date(studentData.dob),
          userId: finalUserId,
        },
        include: { user: true },
      });

      // 3. Link existing contacts by full LinkContactDto (id + relation)
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

      // 3b. Link existing contacts by plain UUID array (relation defaults to PARENT)
      if (contactIds && contactIds.length > 0) {
        for (const contactId of contactIds) {
          await prisma.studentContact.upsert({
            where: {
              studentId_contactId: { studentId: student.id, contactId },
            },
            update: {},
            create: {
              studentId: student.id,
              contactId,
              relation: ContactTypes.PARENT,
            },
          });
        }
      }

      // 4. Create or link inline contacts
      if (newContacts && newContacts.length > 0) {
        for (const nc of newContacts) {
          let contactId: string;

          if (nc.email) {
            const existing = await prisma.contact.findFirst({
              where: {
                isActive: true,
                OR: [
                  { email: nc.email },
                  { user: { email: nc.email } },
                ],
              },
            });

            if (existing) {
              contactId = existing.id;
            } else {
              contactId = await this.createInlineContact(prisma, nc);
            }
          } else {
            contactId = await this.createInlineContact(prisma, nc);
          }

          await prisma.studentContact.upsert({
            where: {
              studentId_contactId: {
                studentId: student.id,
                contactId,
              },
            },
            update: { relation: nc.relation || ContactTypes.PARENT },
            create: {
              studentId: student.id,
              contactId,
              relation: nc.relation || ContactTypes.PARENT,
            },
          });
        }
      }

      // Fetch the full student object with linked contacts to return
      const finalStudent = await prisma.student.findUnique({
        where: { id: student.id },
        include: {
          user: true,
          studentContacts: {
            include: {
              contact: true,
            },
          },
        },
      });

      if (!finalStudent) {
        throw new NotFoundException('Failed to retrieve the created student.');
      }

      const { user, ...rest } = finalStudent;
      return {
        ...rest,
        email: user?.email || null,
      };
    });
  }
}
