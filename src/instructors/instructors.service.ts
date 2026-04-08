import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateInstructorDto } from './dto/create-instructor.dto';
import { UpdateInstructorDto } from './dto/update-instructor.dto';
import { FilterInstructorDto } from './dto/filter-instructor.dto';
import * as bcrypt from 'bcrypt';

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
    const { email, password, roles, userId, ...instructorData } =
      createInstructorDto;

    console.log('[DEBUG] Starting createInstructor process with data:', {
      email,
      userId,
      instructorData,
    });

    try {
      return await this.prisma.$transaction(async (prisma) => {
      let finalUserId = userId;

        if (email) {
          console.log('[DEBUG] Email provided, creating/linking user...');
          const existingUser = await prisma.user.findUnique({
            where: { email },
          });

          if (existingUser) {
            console.log('[DEBUG] User already exists with email:', email);
            throw new ConflictException(
              'A user with this email already exists.',
            );
          }

          const saltRounds = 10;
          const finalPassword = password || 'TrickTrackerTemp123!';
          console.log('[DEBUG] Hashing password...');
          const hashedPassword = await bcrypt.hash(finalPassword, saltRounds);

          console.log('[DEBUG] Creating user in Transaction...');
          const newUser = await prisma.user.create({
            data: {
              email,
              passwordHash: hashedPassword,
              roles: roles || ['INSTRUCTOR'],
            },
          });
          finalUserId = newUser.id;
          console.log('[DEBUG] User created with ID:', finalUserId);
      } else if (userId) {
        const existingUser = await prisma.user.findUnique({
          where: { id: userId },
        });

        if (!existingUser) {
          throw new ConflictException(
            'A user with this ID does not exist in the system.',
          );
        }

        const existingInstructor = await prisma.instructor.findUnique({
          where: { userId },
        });

        if (existingInstructor) {
          throw new ConflictException(
            'This user already has an instructor profile.',
          );
        }
      }

        console.log('[DEBUG] Creating instructor profile...');
        const instructor = await prisma.instructor.create({
          data: {
            ...instructorData,
            userId: finalUserId,
          },
          include: { user: true },
        });

        console.log('[DEBUG] Instructor created successfully.');
        const { user: linkedUser, ...rest } = instructor;
        return {
          ...rest,
          email: linkedUser?.email || null,
        };
      });
    } catch (error) {
      console.error('[ERROR LOG] Exception caught in createInstructor:', error);
      throw error;
    }
  }

  /**
   * Filters instructors by name or surname.
   * @param filterDto Contains the fullname filter.
   * @returns A list of filtered instructors.
   */
  async filter(filterDto: FilterInstructorDto) {
    const { fullname } = filterDto;

    const where: any = {
      isActive: true, // only active instructors
    };

    if (fullname) {
      // search in both name and surname
      where.OR = [
        { name: { contains: fullname, mode: 'insensitive' } },
        { surname: { contains: fullname, mode: 'insensitive' } },
      ];
    }

    const instructors = await this.prisma.instructor.findMany({
      where,
      include: {
        user: true,
      },
    });

    return instructors.map((instructor) => {
      const { user, ...rest } = instructor;
      return {
        ...rest,
        email: user?.email || null,
      };
    });
  }

  /**
   * Retrieves all active instructors in the system.
   * @returns A list of active instructors.
   */
  async findAll() {
    const instructors = await this.prisma.instructor.findMany({
      where: {
        isActive: true,
      },
      include: {
        user: true,
      },
    });

    return instructors.map((instructor) => {
      const { user, ...rest } = instructor;
      return {
        ...rest,
        email: user?.email || null,
      };
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
