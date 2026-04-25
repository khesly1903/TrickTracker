import {
  IsArray,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Min,
} from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateProgramLocationDto {
  @ApiPropertyOptional({ description: 'New price', example: 120.0 })
  @IsNumber()
  @Min(0)
  @IsOptional()
  price?: number;

  @ApiPropertyOptional({ description: 'New capacity', example: 25 })
  @IsInt()
  @Min(1)
  @IsOptional()
  capacity?: number;

  @ApiPropertyOptional({
    description: 'New main instructor ID (null to unassign)',
    example: 'ca58ae9b-0b3c-4b1a-9c1a-1a2b3c4d5e6f',
  })
  @IsString()
  @IsOptional()
  instructorId?: string | null;

  @ApiPropertyOptional({
    description: 'Replace backup instructor list with these IDs (empty array clears all)',
    type: [String],
    example: ['uuid-1', 'uuid-2'],
  })
  @IsArray()
  @IsUUID('4', { each: true })
  @IsOptional()
  backupInstructorIds?: string[];
}
