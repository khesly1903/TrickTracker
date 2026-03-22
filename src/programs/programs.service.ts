import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { CreateProgramDto } from './dto/create-program.dto';
import { UpdateProgramDto } from './dto/update-program.dto';

@Injectable()
export class ProgramsService {
  constructor(private readonly prisma: DatabaseService) {}

  /**
   * Creates a new educational program and generates future sessions based on schedules.
   * @param createProgramDto Data to create a program, including weekly schedules.
   * @returns The created program record.
   */
  async create(createProgramDto: CreateProgramDto) {
    const { schedules, ...programData } = createProgramDto;

    return this.prisma.$transaction(async (prisma) => {
      const program = await prisma.program.create({
        data: {
          ...programData,
          programSchedules: schedules?.length
            ? { create: schedules }
            : undefined,
        },
      });

      if (schedules && schedules.length > 0) {
        const start = new Date(programData.startDate);
        const end = new Date(programData.endDate);
        const sessionPayloads: any[] = [];

        const dayMap: Record<string, number> = {
          SUNDAY: 0,
          MONDAY: 1,
          TUESDAY: 2,
          WEDNESDAY: 3,
          THURSDAY: 4,
          FRIDAY: 5,
          SATURDAY: 6,
        };

        for (
          let dt = new Date(start);
          dt <= end;
          dt.setDate(dt.getDate() + 1)
        ) {
          const currentDayOfWeekNum = dt.getDay();

          for (const sch of schedules) {
            if (dayMap[sch.dayOfWeek] === currentDayOfWeekNum) {
              const schStartTime = new Date(sch.startTime);

              const sessionStart = new Date(dt);
              sessionStart.setHours(
                schStartTime.getHours(),
                schStartTime.getMinutes(),
                0,
                0,
              );

              let sessionEnd: Date;
              if (sch.endTime) {
                const schEndTime = new Date(sch.endTime);
                sessionEnd = new Date(dt);
                sessionEnd.setHours(
                  schEndTime.getHours(),
                  schEndTime.getMinutes(),
                  0,
                  0,
                );
              } else {
                sessionEnd = new Date(
                  sessionStart.getTime() + sch.duration * 60000,
                );
              }

              sessionPayloads.push({
                programId: program.id,
                date: new Date(dt),
                startTime: sessionStart,
                endTime: sessionEnd,
                isCancelled: false,
                type: sch.type,
              });
            }
          }
        }

        if (sessionPayloads.length > 0) {
          await prisma.programSession.createMany({
            data: sessionPayloads,
          });
        }
      }

      return program;
    });
  }

  /**
   * Retrieves all active programs with related class and location.
   * @returns A list of active programs.
   */
  async findAll() {
    return this.prisma.program.findMany({
      where: {
        isActive: true,
      },
      include: {
        inheritedClass: true,
        location: true,
        instructor: true,
      },
    });
  }

  /**
   * Finds a specific program by its unique ID.
   * @param id The program ID.
   * @returns The program record.
   * @throws NotFoundException if program is not found.
   */
  async findOne(id: string) {
    const program = await this.prisma.program.findUnique({
      where: { id },
      include: {
        inheritedClass: true,
        location: true,
        instructor: true,
        programSchedules: true,
        programSkills: true,
        programSessions: true,
      },
    });

    if (!program) {
      throw new NotFoundException('Program not found.');
    }

    return program;
  }

  /**
   * Updates an existing program record.
   * @param id The program ID.
   * @param updateProgramDto Data to update.
   * @returns The updated program record.
   * @throws NotFoundException if program is not found.
   */
  async update(id: string, updateProgramDto: UpdateProgramDto) {
    const existingProgram = await this.findOne(id);

    return this.prisma.program.update({
      where: { id: existingProgram.id },
      data: updateProgramDto,
    });
  }

  /**
   * Soft-deletes a program by setting isActive to false.
   * @param id The program ID.
   * @returns The updated program record.
   * @throws NotFoundException if program is not found.
   */
  async remove(id: string) {
    const existingProgram = await this.findOne(id);

    return this.prisma.program.update({
      where: { id: existingProgram.id },
      data: {
        isActive: false,
      },
    });
  }

  /**
   * Permanently deletes a program record from the database.
   * @param id The program ID.
   * @returns The deleted program record.
   * @throws NotFoundException if program is not found.
   */
  async hardRemove(id: string) {
    const existingProgram = await this.findOne(id);

    return this.prisma.program.delete({
      where: { id: existingProgram.id },
    });
  }
}
