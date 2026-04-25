import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateProgramStageDto {
  @ApiProperty({ description: 'Stage name', example: 'Beginner' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiPropertyOptional({ description: 'Stage description', example: 'Introduction to water and basic safety' })
  @IsString()
  @IsOptional()
  description?: string;
}
