import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateDiscountDto } from './dto/create-discount.dto';
import { UpdateDiscountDto } from './dto/update-discount.dto';

@Injectable()
export class DiscountsService {
  constructor(private readonly prisma: DatabaseService) {}

  async create(dto: CreateDiscountDto, academyId: string) {
    const existing = await this.prisma.discount.findUnique({
      where: { academyId_name: { academyId, name: dto.name } },
    });
    if (existing) throw new ConflictException('A discount with this name already exists.');

    return this.prisma.discount.create({ data: { ...dto, academyId } });
  }

  async findAll(academyId: string) {
    return this.prisma.discount.findMany({
      where: { academyId },
      orderBy: { createdAt: 'asc' },
    });
  }

  async findOne(id: string, academyId: string) {
    const discount = await this.prisma.discount.findFirst({
      where: { id, academyId },
      include: { overrides: true },
    });
    if (!discount) throw new NotFoundException('Discount not found.');
    return discount;
  }

  async update(id: string, dto: UpdateDiscountDto, academyId: string) {
    await this.findOne(id, academyId);

    if (dto.name) {
      const conflict = await this.prisma.discount.findFirst({
        where: { academyId, name: dto.name, id: { not: id } },
      });
      if (conflict) throw new ConflictException('A discount with this name already exists.');
    }

    return this.prisma.discount.update({ where: { id }, data: dto });
  }

  async remove(id: string, academyId: string) {
    await this.findOne(id, academyId);
    await this.prisma.discount.delete({ where: { id } });
  }
}
