import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';
import { Role } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'The email address of the user',
    example: 'user@example.com',
  })
  @IsEmail({}, { message: 'Please provide a valid email address.' })
  @IsNotEmpty({ message: 'Email field cannot be empty.' })
  email: string;

  @ApiProperty({
    description: 'Secure password (min 8 characters)',
    example: 'strongPassword123!',
    minLength: 8,
  })
  @IsString()
  @IsNotEmpty({ message: 'Password field cannot be empty.' })
  @MinLength(8, { message: 'Password must be at least 8 characters long.' })
  password: string;

  @ApiProperty({
    description: 'Assigned roles for the user',
    enum: Role,
    isArray: true,
    example: [Role.STUDENT],
  })
  @IsEnum(Role, { each: true, message: 'You have selected an invalid role.' })
  @IsNotEmpty({ message: 'Roles field cannot be empty.' })
  roles: Role[];
}
