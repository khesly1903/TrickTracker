import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateProgramLocationDto } from './dto/create-program-location.dto';
import { UpdateProgramLocationDto } from './dto/update-program-location.dto';

@Injectable()
export class ProgramLocationsService {
  constructor(private readonly prisma: DatabaseService) {}

  async create(dto: CreateProgramLocationDto, academyId: string) {
    const { backupInstructorIds, programId, locationId, ...rest } = dto;

    const program = await this.prisma.program.findFirst({
      where: { id: programId, academyId },
    });
    if (!program) throw new NotFoundException('Program not found.');

    const location = await this.prisma.location.findFirst({
      where: { id: locationId, academyId },
    });
    if (!location) throw new NotFoundException('Location not found.');

    const duplicate = await this.prisma.programLocation.findUnique({
      where: { programId_locationId: { programId, locationId } },
    });
    if (duplicate) {
      throw new ConflictException('This location is already assigned to the program.');
    }

    const programLocation = await this.prisma.programLocation.create({
      data: {
        programId,
        locationId,
        ...rest,
        backupInstructors: backupInstructorIds?.length
          ? { connect: backupInstructorIds.map((id) => ({ id })) }
          : undefined,
      },
    });

    return this.findOne(programLocation.id, academyId);
  }

  async findAll(academyId: string, programId?: string) {
    return this.prisma.programLocation.findMany({
      where: {
        program: { academyId },
        ...(programId ? { programId } : {}),
      },
      include: {
        location: true,
        instructor: true,
        backupInstructors: true,
        program: { include: { inheritedClass: true } },
        schedules: { orderBy: { createdAt: 'asc' } },
        _count: {
          select: {
            sessions: true,
            studentPrograms: { where: { isActive: true } },
          },
        },
      },
    });
  }

  async findOne(id: string, academyId: string) {
    const pl = await this.prisma.programLocation.findFirst({
      where: { id, program: { academyId } },
      include: {
        location: true,
        instructor: true,
        backupInstructors: true,
        schedules: true,
        _count: {
          select: {
            sessions: true,
            studentPrograms: { where: { isActive: true } },
          },
        },
      },
    });

    if (!pl) throw new NotFoundException('Program location not found.');
    return pl;
  }

  async update(id: string, dto: UpdateProgramLocationDto, academyId: string) {
    await this.findOne(id, academyId);

    const { backupInstructorIds, ...rest } = dto;

    return this.prisma.programLocation.update({
      where: { id },
      data: {
        ...rest,
        ...(backupInstructorIds !== undefined && {
          backupInstructors: {
            set: backupInstructorIds.map((bid) => ({ id: bid })),
          },
        }),
      },
      include: {
        location: true,
        instructor: true,
        backupInstructors: true,
        schedules: true,
      },
    });
  }

  async remove(id: string, academyId: string) {
    await this.findOne(id, academyId);
    await this.prisma.programLocation.delete({ where: { id } });
  }

  async addBackupInstructor(id: string, instructorId: string, academyId: string) {
    await this.findOne(id, academyId);

    const instructor = await this.prisma.instructor.findFirst({
      where: { id: instructorId, academyId },
    });
    if (!instructor) throw new NotFoundException('Instructor not found.');

    return this.prisma.programLocation.update({
      where: { id },
      data: { backupInstructors: { connect: { id: instructorId } } },
      include: { backupInstructors: true, instructor: true },
    });
  }

  async removeBackupInstructor(id: string, instructorId: string, academyId: string) {
    await this.findOne(id, academyId);

    return this.prisma.programLocation.update({
      where: { id },
      data: { backupInstructors: { disconnect: { id: instructorId } } },
      include: { backupInstructors: true, instructor: true },
    });
  }
}
