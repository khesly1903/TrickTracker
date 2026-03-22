import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';

@Injectable()
export class LocationsService {
  constructor(private readonly prisma: DatabaseService) {}

  /**
   * Creates a new location.
   * @param createLocationDto Data to create a location.
   * @returns The created location record.
   */
  async create(createLocationDto: CreateLocationDto) {
    return this.prisma.location.create({
      data: createLocationDto,
    });
  }

  /**
   * Retrieves all active locations.
   * @returns A list of active locations.
   */
  async findAll() {
    return this.prisma.location.findMany({
      where: {
        isActive: true,
      },
    });
  }

  /**
   * Finds a specific location by its unique ID.
   * @param id The location ID.
   * @returns The location record.
   * @throws NotFoundException if location is not found.
   */
  async findOne(id: string) {
    const location = await this.prisma.location.findUnique({
      where: { id },
      include: {
        programs: true,
      },
    });

    if (!location) {
      throw new NotFoundException('Location not found.');
    }

    return location;
  }

  /**
   * Updates an existing location record.
   * @param id The location ID.
   * @param updateLocationDto Data to update.
   * @returns The updated location record.
   * @throws NotFoundException if location is not found.
   */
  async update(id: string, updateLocationDto: UpdateLocationDto) {
    const existingLocation = await this.findOne(id);

    return this.prisma.location.update({
      where: { id: existingLocation.id },
      data: updateLocationDto,
    });
  }

  /**
   * Soft-deletes a location by setting isActive to false.
   * @param id The location ID.
   * @returns The updated location record.
   * @throws NotFoundException if location is not found.
   */
  async remove(id: string) {
    const existingLocation = await this.findOne(id);

    return this.prisma.location.update({
      where: { id: existingLocation.id },
      data: {
        isActive: false,
      },
    });
  }

  /**
   * Permanently deletes a location record from the database.
   * @param id The location ID.
   * @returns The deleted location record.
   * @throws NotFoundException if location is not found.
   */
  async hardRemove(id: string) {
    const existingLocation = await this.findOne(id);

    return this.prisma.location.delete({
      where: { id: existingLocation.id },
    });
  }
}
