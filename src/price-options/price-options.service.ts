import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreatePriceOptionDto } from './dto/create-price-option.dto';
import { UpdatePriceOptionDto } from './dto/update-price-option.dto';
import { PriceKind } from '@prisma/client';

@Injectable()
export class PriceOptionsService {
  constructor(private readonly prisma: DatabaseService) {}

  async create(dto: CreatePriceOptionDto, academyId: string) {
    const pl = await this.prisma.programLocation.findFirst({
      where: { id: dto.programLocationId, program: { academyId } },
    });
    if (!pl) throw new NotFoundException('Program location not found.');

    if (dto.kind === PriceKind.MONTHLY && !dto.billingMode) {
      throw new BadRequestException('billingMode is required for MONTHLY price options.');
    }

    if (dto.isDefault) {
      await this.prisma.priceOption.updateMany({
        where: { programLocationId: dto.programLocationId, isDefault: true },
        data: { isDefault: false },
      });
    }

    return this.prisma.priceOption.create({ data: dto });
  }

  async findAll(programLocationId: string, academyId: string) {
    await this.verifyLocation(programLocationId, academyId);
    return this.prisma.priceOption.findMany({
      where: { programLocationId },
      orderBy: { createdAt: 'asc' },
    });
  }

  async findOne(id: string, academyId: string) {
    const opt = await this.prisma.priceOption.findFirst({
      where: { id, programLocation: { program: { academyId } } },
    });
    if (!opt) throw new NotFoundException('Price option not found.');
    return opt;
  }

  async update(id: string, dto: UpdatePriceOptionDto, academyId: string) {
    const opt = await this.findOne(id, academyId);

    if (dto.kind === PriceKind.MONTHLY) {
      const mode = dto.billingMode ?? opt.billingMode;
      if (!mode) throw new BadRequestException('billingMode is required for MONTHLY price options.');
    }

    if (dto.isDefault) {
      await this.prisma.priceOption.updateMany({
        where: { programLocationId: opt.programLocationId, isDefault: true, id: { not: id } },
        data: { isDefault: false },
      });
    }

    return this.prisma.priceOption.update({ where: { id }, data: dto });
  }

  async remove(id: string, academyId: string) {
    await this.findOne(id, academyId);
    await this.prisma.priceOption.delete({ where: { id } });
  }

  private async verifyLocation(programLocationId: string, academyId: string) {
    const pl = await this.prisma.programLocation.findFirst({
      where: { id: programLocationId, program: { academyId } },
    });
    if (!pl) throw new NotFoundException('Program location not found.');
    return pl;
  }
}
