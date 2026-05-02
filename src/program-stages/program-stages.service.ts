import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateProgramStageDto } from './dto/create-program-stage.dto';
import { UpdateProgramStageDto } from './dto/update-program-stage.dto';

@Injectable()
export class ProgramStagesService {
  constructor(private readonly prisma: DatabaseService) {}

  async create(programId: string, dto: CreateProgramStageDto, academyId: string) {
    await this.verifyProgram(programId, academyId);

    const duplicate = await this.prisma.programStage.findUnique({
      where: { programId_name: { programId, name: dto.name } },
    });
    if (duplicate) {
      throw new ConflictException(`Stage "${dto.name}" already exists for this program.`);
    }

    return this.prisma.programStage.create({
      data: { programId, name: dto.name, description: dto.description },
      include: { skills: true },
    });
  }

  async findAll(programId: string, academyId: string) {
    await this.verifyProgram(programId, academyId);

    return this.prisma.programStage.findMany({
      where: { programId },
      orderBy: { createdAt: 'asc' },
      include: { skills: { orderBy: { name: 'asc' } } },
    });
  }

  async findOne(programId: string, id: string, academyId: string) {
    await this.verifyProgram(programId, academyId);

    const stage = await this.prisma.programStage.findUnique({
      where: { id },
      include: { skills: { orderBy: { name: 'asc' } } },
    });

    if (!stage || stage.programId !== programId) {
      throw new NotFoundException('Program stage not found.');
    }

    return stage;
  }

  async update(programId: string, id: string, dto: UpdateProgramStageDto, academyId: string) {
    await this.findOne(programId, id, academyId);

    if (dto.name) {
      const duplicate = await this.prisma.programStage.findUnique({
        where: { programId_name: { programId, name: dto.name } },
      });
      if (duplicate && duplicate.id !== id) {
        throw new ConflictException(`Stage "${dto.name}" already exists for this program.`);
      }
    }

    return this.prisma.programStage.update({
      where: { id },
      data: dto,
      include: { skills: { orderBy: { name: 'asc' } } },
    });
  }

  async remove(programId: string, id: string, academyId: string) {
    await this.findOne(programId, id, academyId);
    await this.prisma.programStage.delete({ where: { id } });
  }

  private async verifyProgram(programId: string, academyId: string) {
    const program = await this.prisma.program.findFirst({
      where: { id: programId, academyId },
    });
    if (!program) throw new NotFoundException('Program not found.');
  }
}
