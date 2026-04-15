import {
  IsBoolean,
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ScheduleType } from '@prisma/client';

export class CreateProgramSessionDto {
  @ApiProperty({
    description: 'The exact date of the session (ISO string)',
    example: '2026-06-06T00:00:00.000Z',
  })
  @IsDateString()
  @IsNotEmpty()
  date: string | Date;

  @ApiProperty({
    description: 'Start time of the session on this date (ISO string)',
    example: '2026-06-06T10:00:00.000Z',
  })
  @IsDateString()
  @IsNotEmpty()
  startTime: string | Date;

  @ApiProperty({
    description: 'End time of the session on this date (ISO string)',
    example: '2026-06-06T11:00:00.000Z',
  })
  @IsDateString()
  @IsNotEmpty()
  endTime: string | Date;

  @ApiProperty({
    description: 'Whether the session is cancelled',
    example: false,
    default: false,
  })
  @IsBoolean()
  @IsOptional()
  isCancelled?: boolean;

  @ApiProperty({
    description: 'The type of session, e.g., CLASS, HOLIDAY',
    enum: ScheduleType,
    example: ScheduleType.CLASS,
  })
  @IsEnum(ScheduleType)
  @IsOptional()
  type?: ScheduleType;

  @ApiProperty({
    description: 'The parent Program Location ID',
    example: 'ca58ae9b-0b3c-4b1a-9c1a-1a2b3c4d5e6f',
  })
  @IsString()
  @IsNotEmpty()
  programLocationId: string;
}
