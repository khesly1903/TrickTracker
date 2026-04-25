import { IsDateString, IsEnum, IsInt, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { DayOfWeek, ScheduleType } from '@prisma/client';

export class UpdateProgramScheduleDto {
  @ApiPropertyOptional({ enum: DayOfWeek, example: DayOfWeek.SUNDAY })
  @IsEnum(DayOfWeek)
  @IsOptional()
  dayOfWeek?: DayOfWeek;

  @ApiPropertyOptional({ example: '1970-01-01T09:00:00.000Z' })
  @IsDateString()
  @IsOptional()
  startTime?: string | Date;

  @ApiPropertyOptional({ example: '1970-01-01T10:00:00.000Z' })
  @IsDateString()
  @IsOptional()
  endTime?: string | Date;

  @ApiPropertyOptional({ example: 60 })
  @IsInt()
  @IsOptional()
  duration?: number;

  @ApiPropertyOptional({ enum: ScheduleType, example: ScheduleType.CLASS })
  @IsEnum(ScheduleType)
  @IsOptional()
  type?: ScheduleType;
}
