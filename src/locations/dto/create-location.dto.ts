import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateLocationDto {
  @ApiProperty({
    description: 'The name of the location',
    example: 'Golden Gate Gym',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Full address of the location',
    example: '123 Sport St, San Francisco, CA',
  })
  @IsString()
  @IsNotEmpty()
  address: string;
}
