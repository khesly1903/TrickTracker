import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { SkillType } from '@prisma/client';
import { Type } from 'class-transformer';

export class CreateProgramSkillItemDto {
  @ApiProperty({ description: 'Skill or trick name', example: 'Backstroke' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Type: SKILL or TRICK', enum: SkillType, example: SkillType.SKILL })
  @IsEnum(SkillType)
  @IsNotEmpty()
  type: SkillType;

  @ApiPropertyOptional({ description: 'Description of the skill or trick', example: 'Alternating arm windmill motion while kicking on back' })
  @IsString()
  @IsOptional()
  description?: string;
}

export class BulkAddProgramSkillsDto {
  @ApiProperty({ description: 'Skills to add to this stage', type: [CreateProgramSkillItemDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateProgramSkillItemDto)
  skills: CreateProgramSkillItemDto[];
}
