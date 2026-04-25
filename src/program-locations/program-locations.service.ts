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

  async create(dto: CreateProgramLocationDto) {
    const { backupInstructorIds, programId, locationId, ...rest } = dto;

    const program = await this.prisma.program.findUnique({
      where: { id: programId },
    });
    if (!program) throw new NotFoundException('Program not found.');

    const location = await this.prisma.location.findUnique({
      where: { id: locationId },
    });
    if (!location) throw new NotFoundException('Location not found.');

    const duplicate = await this.prisma.programLocation.findUnique({
      where: { programId_locationId: { programId, locationId } },
    });
    if (duplicate) {
      throw new ConflictException(
        'This location is already assigned to the program.',
      );
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

    return this.findOne(programLocation.id);
  }

  async findAll(programId?: string) {
    return this.prisma.programLocation.findMany({
      where: programId ? { programId } : undefined,
      include: {
        location: true,
        instructor: true,
        backupInstructors: true,
        _count: {
          select: {
            sessions: true,
            studentPrograms: { where: { isActive: true } },
          },
        },
      },
    });
  }

  async findOne(id: string) {
    const pl = await this.prisma.programLocation.findUnique({
      where: { id },
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

  async update(id: string, dto: UpdateProgramLocationDto) {
    await this.findOne(id);

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

  async remove(id: string) {
    await this.findOne(id);
    await this.prisma.programLocation.delete({ where: { id } });
  }

  async addBackupInstructor(id: string, instructorId: string) {
    await this.findOne(id);

    const instructor = await this.prisma.instructor.findUnique({
      where: { id: instructorId },
    });
    if (!instructor) throw new NotFoundException('Instructor not found.');

    return this.prisma.programLocation.update({
      where: { id },
      data: { backupInstructors: { connect: { id: instructorId } } },
      include: { backupInstructors: true, instructor: true },
    });
  }

  async removeBackupInstructor(id: string, instructorId: string) {
    await this.findOne(id);

    return this.prisma.programLocation.update({
      where: { id },
      data: { backupInstructors: { disconnect: { id: instructorId } } },
      include: { backupInstructors: true, instructor: true },
    });
  }
}
