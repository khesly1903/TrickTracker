import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateProgramSessionDto } from './dto/create-program-session.dto';
import { UpdateProgramSessionDto } from './dto/update-program-session.dto';

@Injectable()
export class ProgramSessionsService {
  constructor(private readonly prisma: DatabaseService) {}

  /**
   * Manually creates a new individual program session (ad-hoc).
   * @param createDto Session data.
   * @returns The created program session.
   */
  async create(createDto: CreateProgramSessionDto) {
    return this.prisma.programSession.create({
      data: createDto,
    });
  }

  /**
   * Retrieves specific sessions, optionally filtered by programLocationId.
   * @param programLocationId Optional Program Location ID to filter.
   * @returns A list of program sessions.
   */
  async findAll(
    academyId: string,
    programLocationId?: string,
    dateFrom?: string,
    dateTo?: string,
  ) {
    const where: any = {
      programLocation: { program: { academyId } },
    };

    if (programLocationId) where.programLocationId = programLocationId;
    if (dateFrom || dateTo) {
      where.date = {};
      if (dateFrom) where.date.gte = new Date(dateFrom);
      if (dateTo) where.date.lte = new Date(dateTo);
    }

    return this.prisma.programSession.findMany({
      where,
      orderBy: { startTime: 'asc' },
      include: {
        programLocation: {
          include: {
            instructor: { select: { name: true, surname: true } },
            program: { select: { id: true, name: true } },
            location: { select: { name: true } },
          },
        },
      },
    });
  }

  /**
   * Finds a specific program session by its unique ID.
   * @param id The session ID.
   * @returns The session record.
   * @throws NotFoundException if session is not found.
   */
  async findOne(id: string) {
    const session = await this.prisma.programSession.findUnique({
      where: { id },
      include: {
        attendances: true,
      },
    });

    if (!session) {
      throw new NotFoundException('Program session not found.');
    }

    return session;
  }

  /**
   * Updates an existing program session (e.g., mark as Holiday or cancelled).
   * @param id The session ID.
   * @param updateDto Data to update.
   * @returns The updated session record.
   * @throws NotFoundException if session is not found.
   */
  async update(id: string, updateDto: UpdateProgramSessionDto) {
    const existingSession = await this.findOne(id);

    return this.prisma.programSession.update({
      where: { id: existingSession.id },
      data: updateDto,
    });
  }

  /**
   * Permanently deletes multiple specific sessions at once.
   * @param ids Array of session IDs to delete.
   * @returns Object with the count of deleted sessions.
   */
  async removeMultiple(ids: string[]) {
    return this.prisma.programSession.deleteMany({
      where: {
        id: { in: ids },
      },
    });
  }

  /**
   * Permanently deletes a specific ad-hoc session if needed.
   * Used if a session was mistakenly created or completely revoked.
   * @param id The session ID.
   * @returns The deleted session record.
   * @throws NotFoundException if session is not found.
   */
  async remove(id: string) {
    const existingSession = await this.findOne(id);

    return this.prisma.programSession.delete({
      where: { id: existingSession.id },
    });
  }
}
