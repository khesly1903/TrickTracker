import { IsOptional, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class FilterStudentDto {
  @ApiPropertyOptional({
    description: 'Filter student by name or surname',
    example: 'Juli',
  })
  @IsString()
  @IsOptional()
  fullname?: string;
}
