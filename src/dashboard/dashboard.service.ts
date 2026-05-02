import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { ScheduleType, StudentType } from '@prisma/client';

@Injectable()
export class DashboardService {
  constructor(private readonly prisma: DatabaseService) {}

  async getDashboardData(academyId: string) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const [
      activeStudentsCount,
      childStudentsCount,
      adultStudentsCount,
      activeProgramsCount,
      activeInstructorsCount,
      recentStudents,
      recentPrograms,
      upcomingSessions,
      programsByLocation,
    ] = await Promise.all([
      this.prisma.student.count({ where: { isActive: true, academyId } }),
      this.prisma.student.count({ where: { isActive: true, type: StudentType.CHILD, academyId } }),
      this.prisma.student.count({ where: { isActive: true, type: StudentType.ADULT, academyId } }),
      this.prisma.program.count({ where: { isActive: true, academyId } }),
      this.prisma.instructor.count({ where: { isActive: true, academyId } }),

      this.prisma.student.findMany({
        where: { isActive: true, academyId },
        orderBy: { createdAt: 'desc' },
        take: 5,
        select: { id: true, name: true, surname: true, createdAt: true },
      }),
      this.prisma.program.findMany({
        where: { isActive: true, academyId },
        orderBy: { startDate: 'desc' },
        take: 5,
        select: { id: true, name: true, startDate: true },
      }),

      this.prisma.programSession.findMany({
        where: {
          date: {
            gte: today,
            lt: new Date(today.getTime() + 24 * 60 * 60 * 1000),
          },
          type: { not: ScheduleType.CANCELLED },
          programLocation: { program: { academyId } },
        },
        include: {
          programLocation: {
            include: {
              program: { select: { name: true } },
              location: { select: { name: true } },
            },
          },
        },
        orderBy: { startTime: 'asc' },
      }),

      this.prisma.location.findMany({
        where: { isActive: true, academyId },
        select: {
          name: true,
          _count: { select: { programLocations: true } },
        },
      }),
    ]);

    const last7Days = new Date(today);
    last7Days.setDate(today.getDate() - 7);

    const recentAttendances = await this.prisma.attendance.findMany({
      where: {
        createdAt: { gte: last7Days },
        studentProgram: { student: { academyId } },
      },
      select: { attended: true },
    });

    const totalAttendanceRecords = recentAttendances.length;
    const attendedCount = recentAttendances.filter((a) => a.attended).length;
    const attendanceRate =
      totalAttendanceRecords > 0 ? (attendedCount / totalAttendanceRecords) * 100 : 0;

    return {
      statistics: {
        totalStudents: activeStudentsCount,
        studentsByType: { child: childStudentsCount, adult: adultStudentsCount },
        totalPrograms: activeProgramsCount,
        totalInstructors: activeInstructorsCount,
        attendanceRate: Math.round(attendanceRate * 100) / 100,
      },
      recentActivity: { students: recentStudents, programs: recentPrograms },
      upcomingSessions,
      distributions: {
        byLocation: programsByLocation.map((l) => ({
          location: l.name,
          count: l._count.programLocations,
        })),
      },
    };
  }
}
