import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';

@Injectable()
export class ClassesService {
  constructor(private readonly prisma: DatabaseService) {}

  async create(createClassDto: CreateClassDto, academyId: string) {
    return this.prisma.class.create({
      data: {
        name: createClassDto.name,
        type: createClassDto.type,
        academyId,
      },
    });
  }

  async findAll(academyId: string) {
    return this.prisma.class.findMany({
      where: { isActive: true, academyId },
      include: {
        _count: { select: { programs: true } },
      },
    });
  }

  async findOne(id: string, academyId: string) {
    const classRecord = await this.prisma.class.findFirst({
      where: { id, academyId },
      include: { programs: true },
    });

    if (!classRecord) throw new NotFoundException('Class not found.');
    return classRecord;
  }

  async update(id: string, updateClassDto: UpdateClassDto, academyId: string) {
    const existingClass = await this.findOne(id, academyId);

    return this.prisma.class.update({
      where: { id: existingClass.id },
      data: updateClassDto,
    });
  }

  async remove(id: string, academyId: string) {
    const existingClass = await this.findOne(id, academyId);

    return this.prisma.class.update({
      where: { id: existingClass.id },
      data: { isActive: false },
    });
  }

  async hardRemove(id: string, academyId: string) {
    const existingClass = await this.findOne(id, academyId);

    return this.prisma.class.delete({
      where: { id: existingClass.id },
    });
  }
}
