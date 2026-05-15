import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateDiscountOverrideDto } from './dto/create-discount-override.dto';
import { UpdateDiscountOverrideDto } from './dto/update-discount-override.dto';

@Injectable()
export class DiscountOverridesService {
  constructor(private readonly prisma: DatabaseService) {}

  async create(dto: CreateDiscountOverrideDto, academyId: string) {
    const discount = await this.prisma.discount.findFirst({
      where: { id: dto.discountId, academyId },
    });
    if (!discount) throw new NotFoundException('Discount not found.');

    const pl = await this.prisma.programLocation.findFirst({
      where: { id: dto.programLocationId, program: { academyId } },
    });
    if (!pl) throw new NotFoundException('Program location not found.');

    const existing = await this.prisma.discountOverride.findUnique({
      where: { discountId_programLocationId: { discountId: dto.discountId, programLocationId: dto.programLocationId } },
    });
    if (existing) throw new ConflictException('Override already exists for this discount and location.');

    return this.prisma.discountOverride.create({ data: dto });
  }

  async findAll(programLocationId: string, academyId: string) {
    const pl = await this.prisma.programLocation.findFirst({
      where: { id: programLocationId, program: { academyId } },
    });
    if (!pl) throw new NotFoundException('Program location not found.');

    return this.prisma.discountOverride.findMany({
      where: { programLocationId },
      include: { discount: true },
    });
  }

  async findOne(id: string, academyId: string) {
    const override = await this.prisma.discountOverride.findFirst({
      where: { id, programLocation: { program: { academyId } } },
      include: { discount: true },
    });
    if (!override) throw new NotFoundException('Discount override not found.');
    return override;
  }

  async update(id: string, dto: UpdateDiscountOverrideDto, academyId: string) {
    await this.findOne(id, academyId);
    return this.prisma.discountOverride.update({ where: { id }, data: dto });
  }

  async remove(id: string, academyId: string) {
    await this.findOne(id, academyId);
    await this.prisma.discountOverride.delete({ where: { id } });
  }
}
