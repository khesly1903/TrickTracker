import { IsArray, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DeleteMultipleSessionsDto {
  @ApiProperty({
    description: 'Array of program session IDs to delete',
    example: ['1234-abcd', '5678-efgh'],
  })
  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  ids: string[];
}
