import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class FilterInstructorDto {
  @ApiProperty({
    description: 'Filter instructors by name or surname',
    required: false,
    example: 'Alexander',
  })
  @IsString()
  @IsOptional()
  fullname?: string;
}
