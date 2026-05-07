import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { ContactTypes } from '@prisma/client';

@Injectable()
export class PortalService {
  constructor(private readonly prisma: DatabaseService) {}

  // ─── Student ────────────────────────────────────────────────────────────────

  async getStudentPortal(userId: string) {
    const student = await this.prisma.student.findUnique({
      where: { userId },
      include: {
        studentPrograms: {
          where: { isActive: true },
          include: {
            programLocation: {
              include: {
                program: {
                  include: { programStages: { include: { skills: true } } },
                },
                location: true,
                instructor: true,
                schedules: true,
              },
            },
            studentProgramSkills: {
              include: { programSkill: true },
            },
          },
        },
      },
    });

    if (!student) throw new NotFoundException('Student profile not found.');
    return student;
  }

  // ─── Parent ─────────────────────────────────────────────────────────────────

  async getParentStudents(userId: string) {
    const contact = await this.prisma.contact.findUnique({
      where: { userId },
      include: {
        studentContacts: {
          where: { relation: ContactTypes.PARENT },
          include: {
            student: {
              include: {
                studentPrograms: { where: { isActive: true }, select: { id: true } },
              },
            },
          },
        },
      },
    });

    if (!contact) throw new NotFoundException('Contact profile not found.');

    return contact.studentContacts.map((sc) => ({
      ...sc.student,
      programCount: sc.student.studentPrograms.length,
    }));
  }

  async getParentStudentPrograms(userId: string, studentId: string) {
    const contact = await this.prisma.contact.findUnique({ where: { userId } });
    if (!contact) throw new NotFoundException('Contact profile not found.');

    const link = await this.prisma.studentContact.findUnique({
      where: { studentId_contactId: { studentId, contactId: contact.id } },
    });
    if (!link || link.relation !== ContactTypes.PARENT) {
      throw new ForbiddenException('Access denied.');
    }

    return this.prisma.studentProgram.findMany({
      where: { studentId, isActive: true },
      include: {
        programLocation: {
          include: {
            program: {
              include: { programStages: { include: { skills: true } } },
            },
            location: true,
            instructor: true,
            schedules: true,
          },
        },
        studentProgramSkills: {
          include: { programSkill: true },
        },
      },
    });
  }

  // ─── Instructor ──────────────────────────────────────────────────────────────

  async getInstructorPrograms(userId: string) {
    const instructor = await this.prisma.instructor.findUnique({ where: { userId } });
    if (!instructor) throw new NotFoundException('Instructor profile not found.');

    const [main, backup] = await Promise.all([
      this.prisma.programLocation.findMany({
        where: { instructorId: instructor.id },
        include: {
          program: { include: { programStages: { include: { skills: true } } } },
          location: true,
          studentPrograms: {
            where: { isActive: true },
            include: {
              student: true,
              studentProgramSkills: { include: { programSkill: true } },
            },
          },
          schedules: true,
        },
      }),
      this.prisma.programLocation.findMany({
        where: { backupInstructors: { some: { id: instructor.id } } },
        include: {
          program: { include: { programStages: { include: { skills: true } } } },
          location: true,
          studentPrograms: {
            where: { isActive: true },
            include: {
              student: true,
              studentProgramSkills: { include: { programSkill: true } },
            },
          },
          schedules: true,
        },
      }),
    ]);

    const seen = new Set<string>();
    const programs = [...main, ...backup].filter((p) => {
      if (seen.has(p.id)) return false;
      seen.add(p.id);
      return true;
    });

    return programs;
  }

  async updateInstructorSkill(
    userId: string,
    skillId: string,
    dto: { status: number; note?: string },
  ) {
    const instructor = await this.prisma.instructor.findUnique({ where: { userId } });
    if (!instructor) throw new NotFoundException('Instructor profile not found.');

    const skill = await this.prisma.studentProgramSkill.findUnique({
      where: { id: skillId },
      include: {
        studentProgram: {
          include: {
            programLocation: {
              include: {
                backupInstructors: { where: { id: instructor.id }, select: { id: true } },
              },
            },
          },
        },
      },
    });

    if (!skill) throw new NotFoundException('Skill not found.');

    const pl = skill.studentProgram.programLocation;
    const isMain = pl.instructorId === instructor.id;
    const isBackup = pl.backupInstructors.length > 0;
    if (!isMain && !isBackup) throw new ForbiddenException('Access denied.');

    return this.prisma.studentProgramSkill.update({
      where: { id: skillId },
      data: {
        status: dto.status,
        note: dto.note,
        updatedById: instructor.id,
        achievedAt: dto.status >= 3 ? new Date() : null,
      },
    });
  }
}
