import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { SkillType, Stage } from '@prisma/client';
import { Type } from 'class-transformer';

export class CreateProgramSkillItemDto {
  @ApiProperty({
    description: 'Name of the skill',
    example: 'Backstroke',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Type: SKILL or TRICK',
    enum: SkillType,
    example: SkillType.SKILL,
  })
  @IsEnum(SkillType)
  @IsNotEmpty()
  type: SkillType;

  @ApiProperty({
    description: 'The stage at which this skill is taught in this program',
    enum: Stage,
    example: Stage.BEGINNER,
  })
  @IsEnum(Stage)
  @IsNotEmpty()
  stage: Stage;
}

export class BulkAddProgramSkillsDto {
  @ApiProperty({
    description: 'List of skills to add to the program curriculum',
    type: [CreateProgramSkillItemDto],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateProgramSkillItemDto)
  skills: CreateProgramSkillItemDto[];
}
