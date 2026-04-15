import {
  IsArray,
  IsDateString,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { Gender, ProgramLevels } from '@prisma/client';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { CreateProgramScheduleDto } from './create-program-schedule.dto';

export class CreateProgramLocationDto {
  @ApiProperty({
    description: 'The ID of the location',
    example: 'ca58ae9b-0b3c-4b1a-9c1a-1a2b3c4d5e6f',
  })
  @IsString()
  @IsNotEmpty()
  locationId: string;

  @ApiProperty({
    description: 'Location-specific price',
    example: 99.99,
  })
  @IsNumber()
  @Min(0)
  @IsNotEmpty()
  price: number;

  @ApiProperty({
    description: 'Location-specific capacity',
    example: 20,
  })
  @IsInt()
  @Min(1)
  @IsNotEmpty()
  capacity: number;

  @ApiPropertyOptional({
    description: 'The ID of the main instructor for this location',
    example: 'ca58ae9b-0b3c-4b1a-9c1a-1a2b3c4d5e6f',
  })
  @IsString()
  @IsOptional()
  instructorId?: string;

  @ApiPropertyOptional({
    description: 'The IDs of the backup instructors for this location',
    type: [String],
    example: ['ca58ae9b-0b3c-4b1a-9c1a-1a2b3c4d5e6f'],
  })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  backupInstructorIds?: string[];

  @ApiProperty({
    description: 'Schedule templates for this location',
    type: [CreateProgramScheduleDto],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateProgramScheduleDto)
  @IsOptional()
  schedules?: CreateProgramScheduleDto[];
}

export class CreateProgramDto {
  @ApiProperty({
    description: 'Start date of the program (ISO format)',
    example: '2026-06-01T00:00:00.000Z',
  })
  @IsDateString()
  @IsNotEmpty()
  startDate: string | Date;

  @ApiProperty({
    description: 'End date of the program (ISO format)',
    example: '2026-08-01T00:00:00.000Z',
  })
  @IsDateString()
  @IsNotEmpty()
  endDate: string | Date;

  @ApiProperty({
    description: 'The name of the program',
    example: 'Advanced Swimming',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Gender target for the program',
    enum: Gender,
    example: Gender.ALL_GENDER,
  })
  @IsEnum(Gender)
  @IsNotEmpty()
  gender: Gender;

  @ApiProperty({
    description: 'List of required equipment',
    example: ['Swimsuit', 'Goggles'],
  })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  requiredEquipment?: string[];

  @ApiProperty({
    description: 'Minimum age for the program',
    example: 5,
  })
  @IsInt()
  @Min(0)
  @IsNotEmpty()
  minAge: number;

  @ApiProperty({
    description: 'Maximum age for the program',
    example: 12,
  })
  @IsInt()
  @Min(0)
  @IsNotEmpty()
  maxAge: number;

  @ApiProperty({
    description: 'Minimum skill level required',
    enum: ProgramLevels,
    example: ProgramLevels.BEGINNER,
  })
  @IsEnum(ProgramLevels)
  @IsNotEmpty()
  minLevel: ProgramLevels;

  @ApiProperty({
    description: 'Maximum skill level allowed',
    enum: ProgramLevels,
    example: ProgramLevels.ALL_LEVELS,
  })
  @IsEnum(ProgramLevels)
  @IsNotEmpty()
  maxLevel: ProgramLevels;

  @ApiProperty({
    description: 'The ID of the class category this program belongs to',
    example: 'ca58ae9b-0b3c-4b1a-9c1a-1a2b3c4d5e6f',
  })
  @IsString()
  @IsNotEmpty()
  classId: string;

  @ApiProperty({
    description: 'Location configurations for this program',
    type: [CreateProgramLocationDto],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateProgramLocationDto)
  @IsNotEmpty()
  locations: CreateProgramLocationDto[];
}
