import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateProgramDto } from './dto/create-program.dto';
import { UpdateProgramDto } from './dto/update-program.dto';

@Injectable()
export class ProgramsService {
  constructor(private readonly prisma: DatabaseService) {}

  private validateDateRange(start: Date, end: Date): void {
    const now = new Date();
    const minAllowed = new Date(now);
    minAllowed.setFullYear(minAllowed.getFullYear() - 1);
    const maxAllowed = new Date(now);
    maxAllowed.setFullYear(maxAllowed.getFullYear() + 2);

    if (start < minAllowed || start > maxAllowed) {
      throw new BadRequestException('startDate must be within 1 year past and 2 years future.');
    }
    if (end < minAllowed || end > maxAllowed) {
      throw new BadRequestException('endDate must be within 1 year past and 2 years future.');
    }
    if (start >= end) {
      throw new BadRequestException('startDate must be before endDate.');
    }
  }

  async create(createProgramDto: CreateProgramDto, academyId: string) {
    const start = createProgramDto.startDate;
    const end = createProgramDto.endDate;

    this.validateDateRange(start, end);

    if (createProgramDto.minAge > createProgramDto.maxAge) {
      throw new BadRequestException('minAge must be <= maxAge.');
    }

    const classExists = await this.prisma.class.findFirst({
      where: { id: createProgramDto.classId, academyId },
    });
    if (!classExists) throw new NotFoundException('Class not found.');

    const program = await this.prisma.program.create({
      data: { ...createProgramDto, academyId },
    });

    return this.findOne(program.id, academyId);
  }

  async findAll(academyId: string) {
    return this.prisma.program.findMany({
      where: { isActive: true, academyId },
      include: {
        inheritedClass: true,
        programStages: {
          orderBy: { createdAt: 'asc' },
          include: { skills: { orderBy: { name: 'asc' } } },
        },
        programLocations: {
          include: {
            location: true,
            instructor: true,
            backupInstructors: true,
            schedules: true,
            _count: { select: { sessions: true, studentPrograms: { where: { isActive: true } } } },
          },
        },
      },
    });
  }

  async findOne(id: string, academyId: string) {
    const program = await this.prisma.program.findFirst({
      where: { id, academyId },
      include: {
        inheritedClass: true,
        programStages: {
          orderBy: { createdAt: 'asc' },
          include: { skills: { orderBy: { name: 'asc' } } },
        },
        programLocations: {
          include: {
            location: true,
            instructor: true,
            backupInstructors: true,
            schedules: true,
            _count: { select: { sessions: true, studentPrograms: { where: { isActive: true } } } },
          },
        },
      },
    });

    if (!program) throw new NotFoundException('Program not found.');
    return program;
  }

  async update(id: string, updateProgramDto: UpdateProgramDto, academyId: string) {
    const existing = await this.findOne(id, academyId);

    if (updateProgramDto.classId) {
      const classExists = await this.prisma.class.findFirst({
        where: { id: updateProgramDto.classId, academyId },
      });
      if (!classExists) throw new NotFoundException('Class not found.');
    }

    const start = updateProgramDto.startDate ?? existing.startDate;
    const end = updateProgramDto.endDate ?? existing.endDate;
    if (updateProgramDto.startDate || updateProgramDto.endDate) {
      this.validateDateRange(start, end);
    }

    if (updateProgramDto.minAge !== undefined || updateProgramDto.maxAge !== undefined) {
      const minAge = updateProgramDto.minAge ?? existing.minAge;
      const maxAge = updateProgramDto.maxAge ?? existing.maxAge;
      if (minAge > maxAge) throw new BadRequestException('minAge must be <= maxAge.');
    }

    return this.prisma.program.update({
      where: { id: existing.id },
      data: updateProgramDto,
    });
  }

  async remove(id: string, academyId: string) {
    const existing = await this.findOne(id, academyId);

    return this.prisma.program.update({
      where: { id: existing.id },
      data: { isActive: false },
    });
  }

  async hardRemove(id: string, academyId: string) {
    const existing = await this.findOne(id, academyId);

    return this.prisma.program.delete({
      where: { id: existing.id },
    });
  }
}
