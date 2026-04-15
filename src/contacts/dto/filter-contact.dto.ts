import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class FilterContactDto {
  @ApiProperty({
    description: 'Filter contacts by name or surname',
    required: false,
    example: 'Alexander',
  })
  @IsString()
  @IsOptional()
  fullname?: string;
}
