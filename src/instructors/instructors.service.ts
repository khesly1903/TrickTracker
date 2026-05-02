import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateInstructorDto } from './dto/create-instructor.dto';
import { UpdateInstructorDto } from './dto/update-instructor.dto';
import { FilterInstructorDto } from './dto/filter-instructor.dto';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class InstructorsService {
  constructor(private readonly prisma: DatabaseService) {}

  async create(createInstructorDto: CreateInstructorDto, academyId: string) {
    const { email, password, roles, userId, ...instructorData } = createInstructorDto;

    return this.prisma.$transaction(async (prisma) => {
      let finalUserId = userId;

      if (email) {
        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) throw new ConflictException('A user with this email already exists.');

        const finalPassword = password || 'TrickTrackerTemp123!';
        const hashedPassword = await bcrypt.hash(finalPassword, 10);

        const newUser = await prisma.user.create({
          data: { email, passwordHash: hashedPassword, roles: roles || ['INSTRUCTOR'] },
        });
        finalUserId = newUser.id;
      } else if (userId) {
        const existingUser = await prisma.user.findUnique({ where: { id: userId } });
        if (!existingUser) throw new ConflictException('A user with this ID does not exist in the system.');

        const existingInstructor = await prisma.instructor.findUnique({ where: { userId } });
        if (existingInstructor) throw new ConflictException('This user already has an instructor profile.');
      }

      const instructor = await prisma.instructor.create({
        data: { ...instructorData, userId: finalUserId, academyId },
        include: { user: true },
      });

      const { user: linkedUser, ...rest } = instructor;
      return { ...rest, email: linkedUser?.email || null };
    });
  }

  async filter(filterDto: FilterInstructorDto, academyId: string) {
    const { fullname } = filterDto;

    const where: any = { isActive: true, academyId };

    if (fullname) {
      where.OR = [
        { name: { contains: fullname, mode: 'insensitive' } },
        { surname: { contains: fullname, mode: 'insensitive' } },
      ];
    }

    const instructors = await this.prisma.instructor.findMany({
      where,
      include: { user: true },
    });

    return instructors.map((instructor) => {
      const { user, ...rest } = instructor;
      return { ...rest, email: user?.email || null };
    });
  }

  async findAll(paginationQuery: PaginationQueryDto, academyId: string) {
    const { page = 1, limit = 10 } = paginationQuery;
    const skip = (page - 1) * limit;

    const where: any = { isActive: true, academyId };

    const [total, instructors] = await Promise.all([
      this.prisma.instructor.count({ where }),
      this.prisma.instructor.findMany({
        where,
        skip,
        take: limit,
        include: { user: true },
        orderBy: { createdAt: 'desc' },
      }),
    ]);

    const lastPage = Math.ceil(total / limit);

    return {
      data: instructors.map((instructor) => {
        const { user: linkedUser, ...rest } = instructor;
        return { ...rest, email: linkedUser?.email || null };
      }),
      meta: { total, page, lastPage, limit },
    };
  }

  async findOne(id: string, academyId: string) {
    const instructor = await this.prisma.instructor.findFirst({
      where: {
        OR: [{ id }, { userId: id }],
        academyId,
      },
    });

    if (!instructor) throw new NotFoundException('Instructor not found.');
    return instructor;
  }

  async update(id: string, updateInstructorDto: UpdateInstructorDto, academyId: string) {
    const existingInstructor = await this.findOne(id, academyId);

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

  async remove(id: string, academyId: string) {
    const existingInstructor = await this.findOne(id, academyId);

    return this.prisma.instructor.update({
      where: { id: existingInstructor.id },
      data: { isActive: false },
    });
  }

  async hardRemove(id: string, academyId: string) {
    const existingInstructor = await this.findOne(id, academyId);

    return this.prisma.instructor.delete({
      where: { id: existingInstructor.id },
    });
  }
}
