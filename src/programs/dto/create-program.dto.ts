import {
  IsDate,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
  IsArray,
} from 'class-validator';
import { Type } from 'class-transformer';
import { Gender } from '@prisma/client';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateProgramDto {
  @ApiProperty({
    description: 'Start date of the program (ISO format)',
    example: '2026-06-01T00:00:00.000Z',
  })
  @Type(() => Date)
  @IsDate()
  @IsNotEmpty()
  startDate: Date;

  @ApiProperty({
    description: 'End date of the program (ISO format)',
    example: '2026-08-01T00:00:00.000Z',
  })
  @Type(() => Date)
  @IsDate()
  @IsNotEmpty()
  endDate: Date;

  @ApiProperty({ description: 'Program name', example: 'Advanced Swimming' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ enum: Gender, example: Gender.ALL_GENDER })
  @IsEnum(Gender)
  @IsNotEmpty()
  gender: Gender;

  @ApiPropertyOptional({
    type: [String],
    example: ['Swimsuit', 'Goggles'],
  })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  requiredEquipment?: string[];

  @ApiProperty({ example: 5 })
  @IsInt()
  @Min(0)
  @IsNotEmpty()
  minAge: number;

  @ApiProperty({ example: 12 })
  @IsInt()
  @Min(0)
  @IsNotEmpty()
  maxAge: number;

  @ApiProperty({
    description: 'Class category ID',
    example: 'ca58ae9b-0b3c-4b1a-9c1a-1a2b3c4d5e6f',
  })
  @IsString()
  @IsNotEmpty()
  classId: string;

  @ApiPropertyOptional({ description: 'Skill level for this program', example: 'Beginner' })
  @IsString()
  @IsOptional()
  level?: string;
}
