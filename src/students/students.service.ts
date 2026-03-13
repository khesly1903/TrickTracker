import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { FilterStudentDto } from './dto/filter-student.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class StudentsService {
  constructor(private readonly prisma: DatabaseService) {}

  /**
   * Retrieves all active students with their associated contacts, programs, and skills.
   * @returns A list of students.
   */
  async findAll() {
    return this.prisma.student.findMany({
      where: {
        isActive: true,
      },
      include: {
        studentContacts: true,
        studentPrograms: true,
        studentSkills: true,
      },
    });
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

    return this.prisma.student.findMany({
      where,
      select: {
        id: true,
        name: true,
        surname: true,
      },
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
        studentSkills: true,
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
  async addContactToStudent(studentId: string, contactId: string) {
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

    return this.prisma.studentContact.create({
      data: {
        studentId: studentExists.id,
        contactId: contactExists.id,
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
    const existingUser = await this.prisma.user.findUnique({
      where: { id: createStudentDto.userId },
    });

    if (!existingUser) {
      throw new ConflictException(
        'A user with this ID does not exist in the system.',
      );
    }

    const existingStudent = await this.prisma.student.findUnique({
      where: { userId: createStudentDto.userId },
    });

    if (existingStudent) {
      throw new ConflictException('This user already has a student profile.');
    }

    const newStudentProfile = await this.prisma.student.create({
      data: {
        userId: createStudentDto.userId,
        name: createStudentDto.name,
        surname: createStudentDto.surname,
        type: createStudentDto.type,
        dob: new Date(createStudentDto.dob),
        injuries: createStudentDto.injuries || [],
        phoneNumber: createStudentDto.phoneNumber,
        secondaryPhoneNumber: createStudentDto.secondaryPhoneNumber,
        whatsappPhoneNumber: createStudentDto.whatsappPhoneNumber,
        school: createStudentDto.school,
      },
    });

    return newStudentProfile;
  }
}
