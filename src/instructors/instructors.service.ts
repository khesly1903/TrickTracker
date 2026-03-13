import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateInstructorDto } from './dto/create-instructor.dto';
import { UpdateInstructorDto } from './dto/update-instructor.dto';

@Injectable()
export class InstructorsService {
  constructor(private readonly prisma: DatabaseService) {}

  /**
   * Registers a new instructor profile linked to an existing user.
   * @param createInstructorDto Data to create the instructor.
   * @returns The created instructor profile.
   * @throws ConflictException if user ID not found or instructor already exists.
   */
  async create(createInstructorDto: CreateInstructorDto) {
    const existingUser = await this.prisma.user.findUnique({
      where: { id: createInstructorDto.userId },
    });

    if (!existingUser) {
      throw new ConflictException(
        'A user with this ID does not exist in the system.',
      );
    }

    const existingInstructor = await this.prisma.instructor.findUnique({
      where: { userId: createInstructorDto.userId },
    });

    if (existingInstructor) {
      throw new ConflictException(
        'This user already has an instructor profile.',
      );
    }

    const newInstructorProfile = await this.prisma.instructor.create({
      data: {
        userId: createInstructorDto.userId,
        name: createInstructorDto.name,
        surname: createInstructorDto.surname,
        phoneNumber: createInstructorDto.phoneNumber,
        whatsappPhoneNumber: createInstructorDto.whatsappPhoneNumber,
        secondaryPhoneNumber: createInstructorDto.secondaryPhoneNumber,
      },
    });

    return newInstructorProfile;
  }

  /**
   * Retrieves all active instructors in the system.
   * @returns A list of active instructors.
   */
  async findAll() {
    return this.prisma.instructor.findMany({
      where: {
        isActive: true,
      },
    });
  }

  /**
   * Finds a specific instructor by their unique ID or associated User ID.
   * @param id The instructor ID or User ID.
   * @returns The instructor record.
   * @throws NotFoundException if instructor is not found.
   */
  async findOne(id: string) {
    const instructor = await this.prisma.instructor.findFirst({
      where: {
        OR: [{ id }, { userId: id }],
      },
    });

    if (!instructor) {
      throw new NotFoundException('Instructor not found.');
    }

    return instructor;
  }

  /**
   * Updates an existing instructor's profile.
   * @param id The instructor ID.
   * @param updateInstructorDto Data to update.
   * @returns The updated instructor record.
   * @throws NotFoundException if instructor is not found.
   */
  async update(id: string, updateInstructorDto: UpdateInstructorDto) {
    const existingInstructor = await this.findOne(id);

    return this.prisma.instructor.update({
      where: { id: existingInstructor.id },
      data: {
        name: updateInstructorDto.name,
        surname: updateInstructorDto.surname,
        phoneNumber: updateInstructorDto.phoneNumber,
        whatsappPhoneNumber: updateInstructorDto.whatsappPhoneNumber,
        secondaryPhoneNumber: updateInstructorDto.secondaryPhoneNumber,
        userId: updateInstructorDto.userId,
      },
    });
  }

  /**
   * Soft-deletes an instructor by setting isActive to false.
   * @param id The instructor ID.
   * @returns The updated instructor record.
   * @throws NotFoundException if instructor is not found.
   */
  async remove(id: string) {
    const existingInstructor = await this.findOne(id);

    return this.prisma.instructor.update({
      where: { id: existingInstructor.id },
      data: {
        isActive: false,
      },
    });
  }

  /**
   * Permanently deletes an instructor record from the database.
   * @param id The instructor ID.
   * @returns The deleted instructor record.
   * @throws NotFoundException if instructor is not found.
   */
  async hardRemove(id: string) {
    const existingInstructor = await this.findOne(id);

    return this.prisma.instructor.delete({
      where: { id: existingInstructor.id },
    });
  }
}
