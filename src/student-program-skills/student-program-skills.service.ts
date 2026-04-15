import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { UpdateStudentProgramSkillDto } from './dto/update-student-program-skill.dto';

@Injectable()
export class StudentProgramSkillsService {
  constructor(private readonly prisma: DatabaseService) {}

  /**
   * Auto-populates all ProgramSkills for a StudentProgram enrollment.
   */
  async populateForEnrollment(studentProgramId: string) {
    const studentProgram = await this.prisma.studentProgram.findUnique({
      where: { id: studentProgramId },
      include: {
        programLocation: {
          include: {
            program: {
              include: {
                programSkills: true,
              },
            },
          },
        },
      },
    });

    if (!studentProgram) {
      throw new NotFoundException('Student enrollment not found.');
    }

    const programSkills = studentProgram.programLocation.program.programSkills;

    if (programSkills.length === 0) {
      return {
        message: 'No skills found in this program curriculum.',
        count: 0,
      };
    }

    const result = await this.prisma.studentProgramSkill.createMany({
      data: programSkills.map((ps) => ({
        studentProgramId: studentProgramId,
        programSkillId: ps.id,
      })),
      skipDuplicates: true,
    });

    return {
      message: `${result.count} skills populated for student.`,
      count: result.count,
    };
  }

  /**
   * Lists all skills and their status for a student within a specific program.
   */
  async findAllByEnrollment(studentProgramId: string) {
    const enrollment = await this.prisma.studentProgram.findUnique({
      where: { id: studentProgramId },
    });
    if (!enrollment)
      throw new NotFoundException('Student enrollment not found.');

    return this.prisma.studentProgramSkill.findMany({
      where: { studentProgramId },
      include: {
        programSkill: true, // Now includes name, type, stage directly
      },
      orderBy: { createdAt: 'asc' },
    });
  }

  /**
   * Gets a specific StudentProgramSkill by ID.
   */
  async findOne(id: string) {
    const record = await this.prisma.studentProgramSkill.findUnique({
      where: { id },
      include: {
        programSkill: true,
        studentProgram: {
          include: { student: true },
        },
      },
    });

    if (!record)
      throw new NotFoundException('Student program skill record not found.');
    return record;
  }

  /**
   * Updates the skill status for a specific student-program-skill record.
   */
  async updateStatus(id: string, updateDto: UpdateStudentProgramSkillDto) {
    const existing = await this.findOne(id);

    return this.prisma.studentProgramSkill.update({
      where: { id: existing.id },
      data: {
        ...updateDto,
        achievedAt:
          updateDto.status === 'MASTERED' ? new Date() : existing.achievedAt,
      },
    });
  }

  /**
   * Removes a specific StudentProgramSkill record.
   */
  async remove(id: string) {
    const existing = await this.findOne(id);

    return this.prisma.studentProgramSkill.delete({
      where: { id: existing.id },
    });
  }
}
