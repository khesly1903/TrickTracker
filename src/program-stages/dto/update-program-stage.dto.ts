import { IsOptional, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateProgramStageDto {
  @ApiPropertyOptional({ description: 'Stage name', example: 'Advanced' })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiPropertyOptional({ description: 'Stage description', example: 'Competitive techniques and endurance training' })
  @IsString()
  @IsOptional()
  description?: string;
}
