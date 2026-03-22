import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateStudentProgramDto } from './dto/create-student-program.dto';
import { StudentProgramSkillsService } from '../student-program-skills/student-program-skills.service';

@Injectable()
export class StudentProgramsService {
  constructor(
    private readonly prisma: DatabaseService,
    private readonly studentProgramSkillsService: StudentProgramSkillsService,
  ) {}

  /**
   * Enrolls a student in a program and auto-populates curriculum skills.
   * @param createDto The student and program IDs.
   * @returns The created enrollment with populated skills count.
   * @throws ConflictException if the student is already enrolled.
   */
  async enroll(createDto: CreateStudentProgramDto) {
    const existing = await this.prisma.studentProgram.findUnique({
      where: {
        studentId_programId: {
          studentId: createDto.studentId,
          programId: createDto.programId,
        },
      },
    });

    if (existing) {
      throw new ConflictException(
        'Student is already enrolled in this program.',
      );
    }

    const enrollment = await this.prisma.studentProgram.create({
      data: createDto,
    });

    // Auto-populate skills from the program curriculum
    const skillResult =
      await this.studentProgramSkillsService.populateForEnrollment(
        enrollment.id,
      );

    return {
      enrollment,
      skillsPopulated: skillResult.count,
    };
  }

  /**
   * Lists enrollments, optionally filtered by studentId or programId.
   * @param studentId Optional student filter.
   * @param programId Optional program filter.
   */
  async findAll(studentId?: string, programId?: string) {
    const where: any = { isActive: true };
    if (studentId) where.studentId = studentId;
    if (programId) where.programId = programId;

    return this.prisma.studentProgram.findMany({
      where,
      include: {
        student: { select: { id: true, name: true, surname: true } },
        program: { select: { id: true, name: true } },
      },
    });
  }

  /**
   * Gets a specific enrollment by ID with full details.
   * @param id The StudentProgram ID.
   */
  async findOne(id: string) {
    const enrollment = await this.prisma.studentProgram.findUnique({
      where: { id },
      include: {
        student: true,
        program: true,
        studentProgramSkills: {
          include: {
            programSkill: true,
          },
        },
      },
    });

    if (!enrollment) throw new NotFoundException('Enrollment not found.');
    return enrollment;
  }

  /**
   * Soft-deletes an enrollment by setting isActive to false.
   * @param id The StudentProgram ID.
   */
  async remove(id: string) {
    const existing = await this.findOne(id);

    return this.prisma.studentProgram.update({
      where: { id: existing.id },
      data: { isActive: false },
    });
  }

  /**
   * Permanently deletes an enrollment and all related data (cascade).
   * @param id The StudentProgram ID.
   */
  async hardRemove(id: string) {
    const existing = await this.findOne(id);

    return this.prisma.studentProgram.delete({
      where: { id: existing.id },
    });
  }
}
