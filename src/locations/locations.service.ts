import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';

@Injectable()
export class LocationsService {
  constructor(private readonly prisma: DatabaseService) {}

  async create(createLocationDto: CreateLocationDto, academyId: string) {
    return this.prisma.location.create({
      data: { ...createLocationDto, academyId },
    });
  }

  async findAll(academyId: string) {
    return this.prisma.location.findMany({
      where: { isActive: true, academyId },
    });
  }

  async findOne(id: string, academyId: string) {
    const location = await this.prisma.location.findFirst({
      where: { id, academyId },
      include: {
        programLocations: {
          include: { program: true },
        },
      },
    });

    if (!location) throw new NotFoundException('Location not found.');
    return location;
  }

  async update(id: string, updateLocationDto: UpdateLocationDto, academyId: string) {
    const existingLocation = await this.findOne(id, academyId);

    return this.prisma.location.update({
      where: { id: existingLocation.id },
      data: updateLocationDto,
    });
  }

  async remove(id: string, academyId: string) {
    const existingLocation = await this.findOne(id, academyId);

    return this.prisma.location.update({
      where: { id: existingLocation.id },
      data: { isActive: false },
    });
  }

  async hardRemove(id: string, academyId: string) {
    const existingLocation = await this.findOne(id, academyId);

    return this.prisma.location.delete({
      where: { id: existingLocation.id },
    });
  }
}
