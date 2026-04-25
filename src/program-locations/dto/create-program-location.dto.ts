import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateProgramLocationDto {
  @ApiProperty({
    description: 'Program ID',
    example: 'ca58ae9b-0b3c-4b1a-9c1a-1a2b3c4d5e6f',
  })
  @IsString()
  @IsNotEmpty()
  programId: string;

  @ApiProperty({
    description: 'Location ID',
    example: 'ca58ae9b-0b3c-4b1a-9c1a-1a2b3c4d5e6f',
  })
  @IsString()
  @IsNotEmpty()
  locationId: string;

  @ApiProperty({ description: 'Price for this location', example: 99.99 })
  @IsNumber()
  @Min(0)
  @IsNotEmpty()
  price: number;

  @ApiProperty({ description: 'Capacity for this location', example: 20 })
  @IsInt()
  @Min(1)
  @IsNotEmpty()
  capacity: number;

  @ApiPropertyOptional({
    description: 'Main instructor ID',
    example: 'ca58ae9b-0b3c-4b1a-9c1a-1a2b3c4d5e6f',
  })
  @IsString()
  @IsOptional()
  instructorId?: string;

  @ApiPropertyOptional({
    description: 'Backup instructor IDs',
    type: [String],
    example: ['ca58ae9b-0b3c-4b1a-9c1a-1a2b3c4d5e6f'],
  })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  backupInstructorIds?: string[];
}
