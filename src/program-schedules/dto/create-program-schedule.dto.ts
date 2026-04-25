import {
  IsDateString,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { DayOfWeek, ScheduleType } from '@prisma/client';

export class CreateProgramScheduleDto {
  @ApiProperty({
    description: 'The Program Location ID this schedule belongs to',
    example: 'ca58ae9b-0b3c-4b1a-9c1a-1a2b3c4d5e6f',
  })
  @IsString()
  @IsNotEmpty()
  programLocationId: string;

  @ApiProperty({
    description: 'Day of the week',
    enum: DayOfWeek,
    example: DayOfWeek.SATURDAY,
  })
  @IsEnum(DayOfWeek)
  @IsNotEmpty()
  dayOfWeek: DayOfWeek;

  @ApiProperty({
    description: 'Start time (ISO string, only time portion used)',
    example: '1970-01-01T10:00:00.000Z',
  })
  @IsDateString()
  @IsNotEmpty()
  startTime: string | Date;

  @ApiPropertyOptional({
    description: 'End time (ISO string). If omitted, duration is used.',
    example: '1970-01-01T11:00:00.000Z',
  })
  @IsDateString()
  @IsOptional()
  endTime?: string | Date;

  @ApiProperty({ description: 'Duration in minutes', example: 60 })
  @IsInt()
  @IsNotEmpty()
  duration: number;

  @ApiProperty({
    description: 'Schedule type',
    enum: ScheduleType,
    example: ScheduleType.CLASS,
  })
  @IsEnum(ScheduleType)
  @IsNotEmpty()
  type: ScheduleType;
}
