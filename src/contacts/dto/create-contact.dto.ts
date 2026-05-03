import {
  IsNotEmpty,
  IsString,
  IsEnum,
  IsOptional,
  IsArray,
  Matches,
} from 'class-validator';
import { ContactTypes, Role } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CreateContactDto {
  // --- USER AUTHENTICATION FIELDS ---
  @ApiProperty({
    description: 'The unique ID of the associated user',
    example: '29d7b3d1-0f41-4558-ae08-5bef4f45c054',
    required: false,
  })
  @IsString()
  @IsOptional()
  userId?: string;

  @ApiProperty({
    description: 'Email for a new user account.',
    example: 'contact@example.com',
    required: false,
  })
  @IsString()
  @IsOptional()
  email?: string;

  @ApiProperty({
    description: 'Password for a new user account.',
    example: 'password123',
    required: false,
  })
  @IsString()
  @IsOptional()
  password?: string;

  @ApiProperty({
    description: 'Roles for the new user account.',
    enum: Role,
    isArray: true,
    example: [Role.PARENT],
    required: false,
  })
  @IsArray()
  @IsEnum(Role, { each: true })
  @IsOptional()
  roles?: Role[];

  @ApiProperty({
    description: 'Custom 1-4 digit sequence for enrollment ID (e.g. "42" → ID will be YY-AAA-0042). Auto-generated if omitted.',
    example: '0042',
    required: false,
  })
  @IsString()
  @IsOptional()
  @Matches(/^\d{1,4}$/, { message: 'Enrollment ID must be 1-4 digits.' })
  enrollmentId?: string;

  // --- CONTACT (PARENT/GUARDIAN) PROFILE FIELDS ---
  @ApiProperty({
    description: 'First name of the contact',
    example: 'John',
  })
  @IsString()
  @IsNotEmpty({ message: 'Name field cannot be empty.' })
  name: string;

  @ApiProperty({
    description: 'Surname of the contact',
    example: 'Doe',
  })
  @IsString()
  @IsNotEmpty({ message: 'Surname field cannot be empty.' })
  surname: string;

  @ApiProperty({
    description: 'The relationship types of the contact',
    enum: ContactTypes,
    isArray: true,
    example: [ContactTypes.PARENT],
  })
  @IsArray()
  @IsEnum(ContactTypes, {
    each: true,
    message: 'Invalid Contact Type selected. Must be PARENT, GUARDIAN etc.',
  })
  @IsOptional()
  type: ContactTypes[] = [ContactTypes.PARENT];

  @ApiProperty({
    description: 'Primary phone number',
    example: '+20 120 574 45 45',
  })
  @IsString()
  @IsNotEmpty({ message: 'Phone number field cannot be empty.' })
  phoneNumber: string;

  @ApiProperty({
    description: 'WhatsApp-enabled phone number',
    example: '+20 120 574 45 45',
  })
  @IsString()
  @IsNotEmpty({ message: 'WhatsApp number field cannot be empty.' })
  whatsappPhoneNumber: string;

  @ApiProperty({
    description: 'Secondary contact number',
    example: '+20 120 574 45 46',
    required: false,
  })
  @IsString()
  @IsOptional()
  secondaryPhoneNumber?: string;
}
