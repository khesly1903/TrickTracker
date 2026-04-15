import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { BulkAttendanceDto } from './dto/bulk-attendance.dto';

@Injectable()
export class AttendancesService {
  constructor(private readonly prisma: DatabaseService) {}

  /**
   * Records or updates attendance for a whole session.
   * @param bulkDto Session ID and list of student attendances.
   */
  async takeBulkAttendance(bulkDto: BulkAttendanceDto) {
    const { programSessionId, attendances } = bulkDto;

    // Verify session exists
    const session = await this.prisma.programSession.findUnique({
      where: { id: programSessionId },
    });
    if (!session) throw new NotFoundException('Program session not found.');

    return this.prisma.$transaction(
      attendances.map((item) =>
        this.prisma.attendance.upsert({
          where: {
            studentProgramId_programSessionId: {
              studentProgramId: item.studentProgramId,
              programSessionId: programSessionId,
            },
          },
          update: {
            attended: item.attended,
            note: item.note,
          },
          create: {
            studentProgramId: item.studentProgramId,
            programSessionId: programSessionId,
            attended: item.attended,
            note: item.note,
          },
        }),
      ),
    );
  }

  /**
   * Gets the full attendance list for a specific session,
   * including students who haven't been marked yet.
   * @param sessionId The ID of the program session.
   */
  async getSessionAttendanceList(sessionId: string) {
    const session = await this.prisma.programSession.findUnique({
      where: { id: sessionId },
      include: {
        programLocation: {
          include: {
            program: { select: { name: true } },
            studentPrograms: {
              where: { isActive: true },
              include: {
                student: true,
                attendances: {
                  where: { programSessionId: sessionId },
                },
              },
            },
          },
        },
      },
    });

    if (!session) throw new NotFoundException('Session not found.');

    return session.programLocation.studentPrograms.map((sp) => ({
      studentProgramId: sp.id,
      studentName: `${sp.student.name} ${sp.student.surname}`,
      attended: sp.attendances[0]?.attended ?? false,
      note: sp.attendances[0]?.note ?? '',
      isMarked: sp.attendances.length > 0,
    }));
  }
}
