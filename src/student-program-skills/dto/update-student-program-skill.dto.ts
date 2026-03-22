import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { SkillStatus } from '@prisma/client';

export class UpdateStudentProgramSkillDto {
  @ApiPropertyOptional({
    description: 'The progress status of the skill',
    enum: SkillStatus,
    example: SkillStatus.LEARNING,
  })
  @IsEnum(SkillStatus)
  @IsOptional()
  status?: SkillStatus;
}
