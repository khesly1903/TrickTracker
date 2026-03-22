import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { ClassTypes } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CreateClassDto {
  @ApiProperty({
    description: 'The name of the class',
    example: 'Swimming Class',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'The type of the class',
    enum: ClassTypes,
    example: ClassTypes.GROUP,
  })
  @IsEnum(ClassTypes)
  @IsNotEmpty()
  type: ClassTypes;
}
