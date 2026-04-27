import { IsInt, IsOptional, IsString, IsUUID, Min } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateStudentProgramSkillDto {
  @ApiPropertyOptional({
    description: 'Skill progress score (integer, scale defined per academy)',
    example: 3,
  })
  @IsInt()
  @Min(0)
  @IsOptional()
  status?: number;

  @ApiPropertyOptional({
    description: 'Optional instructor note for this skill',
    example: 'Needs more practice on landing',
  })
  @IsString()
  @IsOptional()
  note?: string;

  @ApiPropertyOptional({
    description: 'User ID of the instructor who made the update',
  })
  @IsUUID()
  @IsOptional()
  updatedById?: string;
}
