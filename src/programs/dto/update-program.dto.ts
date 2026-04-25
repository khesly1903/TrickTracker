import {
  IsArray,
  IsBoolean,
  IsDate,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  IsUUID,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Gender } from '@prisma/client';

export class UpdateProgramDto {
  @ApiPropertyOptional({ example: 'uuid-of-class' })
  @IsUUID()
  @IsOptional()
  classId?: string;

  @ApiPropertyOptional({ example: 'Advanced Swimming' })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiPropertyOptional({ enum: Gender })
  @IsEnum(Gender)
  @IsOptional()
  gender?: Gender;

  @ApiPropertyOptional({ type: [String], example: ['Swimsuit'] })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  requiredEquipment?: string[];

  @ApiPropertyOptional({ example: 5 })
  @IsInt()
  @Min(0)
  @IsOptional()
  minAge?: number;

  @ApiPropertyOptional({ example: 12 })
  @IsInt()
  @Min(0)
  @IsOptional()
  maxAge?: number;

  @ApiPropertyOptional({ example: '2026-06-01T00:00:00.000Z' })
  @Type(() => Date)
  @IsDate()
  @IsOptional()
  startDate?: Date;

  @ApiPropertyOptional({ example: '2026-08-31T00:00:00.000Z' })
  @Type(() => Date)
  @IsDate()
  @IsOptional()
  endDate?: Date;

  @ApiPropertyOptional({ description: 'Skill level for this program', example: 'Beginner' })
  @IsString()
  @IsOptional()
  level?: string;

  @ApiPropertyOptional({ example: true })
  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}
