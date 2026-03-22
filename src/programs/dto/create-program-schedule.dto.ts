import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsDateString,
  IsOptional,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { DayOfWeek, ScheduleType } from '@prisma/client';

export class CreateProgramScheduleDto {
  @ApiProperty({
    description: 'Day of the week for this schedule',
    enum: DayOfWeek,
    example: DayOfWeek.SATURDAY,
  })
  @IsEnum(DayOfWeek)
  @IsNotEmpty()
  dayOfWeek: DayOfWeek;

  @ApiProperty({
    description: 'Start time for the program on this day (ISO string)',
    example: '1970-01-01T10:00:00.000Z',
  })
  @IsDateString()
  @IsNotEmpty()
  startTime: string | Date;

  @ApiPropertyOptional({
    description: 'End time for the program on this day (ISO string)',
    example: '1970-01-01T11:00:00.000Z',
  })
  @IsDateString()
  @IsOptional()
  endTime?: string | Date;

  @ApiProperty({
    description: 'Duration of the class in minutes',
    example: 60,
  })
  @IsInt()
  @IsNotEmpty()
  duration: number;

  @ApiProperty({
    description: 'Type of the schedule',
    enum: ScheduleType,
    example: ScheduleType.CLASS,
  })
  @IsEnum(ScheduleType)
  @IsNotEmpty()
  type: ScheduleType;
}
