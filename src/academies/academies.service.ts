import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { SetupAcademyDto } from './dto/setup-academy.dto';

@Injectable()
export class AcademiesService {
  constructor(private readonly prisma: DatabaseService) {}

  async setup(ownerId: string, dto: SetupAcademyDto) {
    const existing = await this.prisma.academy.findUnique({ where: { ownerId } });
    if (existing) throw new ConflictException('Academy already exists for this user.');

    const [{ nextval }] = await this.prisma.$queryRaw<{ nextval: bigint }[]>`
      SELECT nextval('academy_seq_number')
    `;

    return this.prisma.academy.create({ data: { ...dto, ownerId, seqNumber: Number(nextval) } });
  }

  async getMyAcademy(ownerId: string) {
    const academy = await this.prisma.academy.findUnique({ where: { ownerId } });
    if (!academy) throw new NotFoundException('No academy found for this user.');
    return academy;
  }
}
