import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { StudentType } from '@prisma/client';

@Injectable()
export class DashboardService {
  constructor(private readonly prisma: DatabaseService) {}

  async getDashboardData() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const nextWeek = new Date(today);
    nextWeek.setDate(today.getDate() + 7);

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
      studentsByLevel,
    ] = await Promise.all([
      // General Statistics
      this.prisma.student.count({ where: { isActive: true } }),
      this.prisma.student.count({
        where: { isActive: true, type: StudentType.CHILD },
      }),
      this.prisma.student.count({
        where: { isActive: true, type: StudentType.ADULT },
      }),
      this.prisma.program.count({ where: { isActive: true } }),
      this.prisma.instructor.count({ where: { isActive: true } }),

      // Recent Activity
      this.prisma.student.findMany({
        where: { isActive: true },
        orderBy: { createdAt: 'desc' },
        take: 5,
        select: { id: true, name: true, surname: true, createdAt: true },
      }),
      this.prisma.program.findMany({
        where: { isActive: true },
        orderBy: { startDate: 'desc' },
        take: 5,
        select: { id: true, name: true, startDate: true },
      }),

      // Upcoming Sessions for today
      this.prisma.programSession.findMany({
        where: {
          date: {
            gte: today,
            lt: new Date(today.getTime() + 24 * 60 * 60 * 1000),
          },
          isCancelled: false,
        },
        include: {
          programLocation: {
            include: {
              program: {
                select: { name: true },
              },
            },
          },
        },
        orderBy: { startTime: 'asc' },
      }),

      // Distributions
      this.prisma.location.findMany({
        where: { isActive: true },
        select: {
          name: true,
          _count: {
            select: { programLocations: true },
          },
        },
      }),

      this.prisma.studentProgram.groupBy({
        by: ['programLocationId'],
        _count: { studentId: true },
      }),
    ]);

    // Calculate attendance rate for last 7 days (mocking logic for now as it requires complex aggregation)
    const last7Days = new Date(today);
    last7Days.setDate(today.getDate() - 7);

    const recentAttendances = await this.prisma.attendance.findMany({
      where: {
        createdAt: { gte: last7Days },
      },
      select: { attended: true },
    });

    const totalAttendanceRecords = recentAttendances.length;
    const attendedCount = recentAttendances.filter((a) => a.attended).length;
    const attendanceRate =
      totalAttendanceRecords > 0
        ? (attendedCount / totalAttendanceRecords) * 100
        : 0;

    return {
      statistics: {
        totalStudents: activeStudentsCount,
        studentsByType: {
          child: childStudentsCount,
          adult: adultStudentsCount,
        },
        totalPrograms: activeProgramsCount,
        totalInstructors: activeInstructorsCount,
        attendanceRate: Math.round(attendanceRate * 100) / 100,
      },
      recentActivity: {
        students: recentStudents,
        programs: recentPrograms,
      },
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
