import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsArray,
} from 'class-validator';
import { StudentType } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CreateStudentDto {
  // --- USER AUTHENTICATION FIELDS ---
  @ApiProperty({
    description: 'It connects user and student',
    example: '29d7b3d1-0f41-4558-ae08-5bef4f45c054',
  })
  @IsString()
  @IsNotEmpty({ message: 'User ID cannot be empty.' })
  userId: string;

  // --- STUDENT PROFILE FIELDS ---
  @ApiProperty({
    example: 'Julia',
  })
  @IsString()
  @IsNotEmpty({ message: 'Name field cannot be empty.' })
  name: string;

  @ApiProperty({
    example: 'Alexan',
  })
  @IsString()
  @IsNotEmpty({ message: 'Surname field cannot be empty.' })
  surname: string;

  @ApiProperty({
    example: 'CHILD',
  })
  @IsEnum(StudentType, { message: 'Invalid Student Type selected.' })
  @IsNotEmpty({ message: 'Student Type (CHILD/ADULT) is required.' })
  type: StudentType;

  @ApiProperty({
    example: '2001-04-05',
  })
  @IsDateString(
    {},
    { message: 'Date of birth must be a valid ISO date string (YYYY-MM-DD).' },
  )
  @IsNotEmpty({ message: 'Date of birth is required.' })
  dob: string;

  @ApiProperty({
    description: 'It is an optional array of injuries',
    example: ['Broken left arm', 'Rıght leg tendon rupture'],
  })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  injuries?: string[];

  @ApiProperty({
    example: '+20 120 574 45 45',
  })
  @IsString()
  @IsOptional()
  phoneNumber?: string;

  @ApiProperty({
    example: '+20 120 574 45 45',
  })
  @IsString()
  @IsOptional()
  secondaryPhoneNumber?: string;

  @ApiProperty({
    example: '+20 120 574 45 45',
  })
  @IsString()
  @IsOptional()
  whatsappPhoneNumber?: string;

  @ApiProperty({
    example: 'Cairo University',
  })
  @IsString()
  @IsOptional()
  school?: string;
}
