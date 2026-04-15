import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';

@Injectable()
export class ClassesService {
  constructor(private readonly prisma: DatabaseService) {}

  /**
   * Creates a new class category.
   * @param createClassDto Data to create a class.
   * @returns The created class record.
   */
  async create(createClassDto: CreateClassDto) {
    return this.prisma.class.create({
      data: {
        name: createClassDto.name,
        type: createClassDto.type,
      },
    });
  }

  /**
   * Retrieves all active classes.
   * @returns A list of active classes.
   */
  async findAll() {
    return this.prisma.class.findMany({
      where: {
        isActive: true,
      },
      include: {
        _count: {
          select: { programs: true },
        },
      },
    });
  }

  /**
   * Finds a specific class by its unique ID.
   * @param id The class ID.
   * @returns The class record.
   * @throws NotFoundException if class is not found.
   */
  async findOne(id: string) {
    const classRecord = await this.prisma.class.findUnique({
      where: { id },
      include: {
        programs: true,
      },
    });

    if (!classRecord) {
      throw new NotFoundException('Class not found.');
    }

    return classRecord;
  }

  /**
   * Updates an existing class record.
   * @param id The class ID.
   * @param updateClassDto Data to update.
   * @returns The updated class record.
   * @throws NotFoundException if class is not found.
   */
  async update(id: string, updateClassDto: UpdateClassDto) {
    const existingClass = await this.findOne(id);

    return this.prisma.class.update({
      where: { id: existingClass.id },
      data: updateClassDto,
    });
  }

  /**
   * Soft-deletes a class by setting isActive to false.
   * @param id The class ID.
   * @returns The updated class record.
   * @throws NotFoundException if class is not found.
   */
  async remove(id: string) {
    const existingClass = await this.findOne(id);

    return this.prisma.class.update({
      where: { id: existingClass.id },
      data: {
        isActive: false,
      },
    });
  }

  /**
   * Permanently deletes a class record from the database.
   * @param id The class ID.
   * @returns The deleted class record.
   * @throws NotFoundException if class is not found.
   */
  async hardRemove(id: string) {
    const existingClass = await this.findOne(id);

    return this.prisma.class.delete({
      where: { id: existingClass.id },
    });
  }
}
