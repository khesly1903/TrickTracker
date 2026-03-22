import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateProgramSkillItemDto } from './dto/add-program-skills.dto';
import { UpdateProgramSkillDto } from './dto/update-program-skill.dto';

@Injectable()
export class ProgramSkillsService {
  constructor(private readonly prisma: DatabaseService) {}

  /**
   * Adds multiple skills to a program's curriculum in bulk.
   * Skips records that already exist (same programId and name).
   * @param programId The ID of the program to add skills to.
   * @param skills Array of skill definitions.
   */
  async addSkills(programId: string, skills: CreateProgramSkillItemDto[]) {
    // Verify program exists
    const program = await this.prisma.program.findUnique({
      where: { id: programId },
    });
    if (!program) throw new NotFoundException('Program not found.');

    const result = await this.prisma.programSkill.createMany({
      data: skills.map((s) => ({
        programId,
        name: s.name,
        type: s.type,
        stage: s.stage,
      })),
      skipDuplicates: true,
    });

    return {
      message: `${result.count} new skill(s) added to the program curriculum.`,
      addedCount: result.count,
      skippedCount: skills.length - result.count,
    };
  }

  /**
   * Lists all skills in a program's curriculum.
   */
  async findAllByProgram(programId: string) {
    return this.prisma.programSkill.findMany({
      where: { programId },
      orderBy: { name: 'asc' },
    });
  }

  /**
   * Gets a specific ProgramSkill by ID.
   */
  async findOne(id: string) {
    const ps = await this.prisma.programSkill.findUnique({
      where: { id },
      include: { program: { select: { id: true, name: true } } },
    });
    if (!ps) throw new NotFoundException('Program skill not found.');
    return ps;
  }

  /**
   * Updates a program-specific skill.
   */
  async update(id: string, updateDto: UpdateProgramSkillDto) {
    await this.findOne(id);
    return this.prisma.programSkill.update({
      where: { id },
      data: updateDto,
    });
  }

  /**
   * Removes a skill from a program's curriculum.
   */
  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.programSkill.delete({ where: { id } });
  }
}
