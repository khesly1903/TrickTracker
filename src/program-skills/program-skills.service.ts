import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateProgramSkillItemDto } from './dto/add-program-skills.dto';
import { UpdateProgramSkillDto } from './dto/update-program-skill.dto';

@Injectable()
export class ProgramSkillsService {
  constructor(private readonly prisma: DatabaseService) {}

  async addSkills(stageId: string, skills: CreateProgramSkillItemDto[]) {
    const stage = await this.prisma.programStage.findUnique({
      where: { id: stageId },
    });
    if (!stage) throw new NotFoundException('Program stage not found.');

    const result = await this.prisma.programSkill.createMany({
      data: skills.map((s) => ({
        stageId,
        name: s.name,
        type: s.type,
        description: s.description,
      })),
      skipDuplicates: true,
    });

    return {
      message: `${result.count} new skill(s) added to the stage.`,
      addedCount: result.count,
      skippedCount: skills.length - result.count,
    };
  }

  async findAllByStage(stageId: string) {
    const stage = await this.prisma.programStage.findUnique({
      where: { id: stageId },
    });
    if (!stage) throw new NotFoundException('Program stage not found.');

    return this.prisma.programSkill.findMany({
      where: { stageId },
      orderBy: { name: 'asc' },
    });
  }

  async findOne(id: string) {
    const skill = await this.prisma.programSkill.findUnique({
      where: { id },
      include: { stage: { select: { id: true, name: true, programId: true } } },
    });
    if (!skill) throw new NotFoundException('Program skill not found.');
    return skill;
  }

  async update(id: string, dto: UpdateProgramSkillDto) {
    await this.findOne(id);

    if (dto.name) {
      const skill = await this.prisma.programSkill.findUnique({ where: { id } });
      const duplicate = await this.prisma.programSkill.findUnique({
        where: { stageId_name: { stageId: skill!.stageId, name: dto.name } },
      });
      if (duplicate && duplicate.id !== id) {
        throw new ConflictException(
          `Skill "${dto.name}" already exists in this stage.`,
        );
      }
    }

    return this.prisma.programSkill.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.programSkill.delete({ where: { id } });
  }
}
