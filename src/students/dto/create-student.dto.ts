import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsArray,
  IsUUID,
  Matches,
  ValidateNested,
} from 'class-validator';
import { StudentType, Role, ContactTypes } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class LinkContactDto {
  @ApiProperty({
    description: 'The unique ID of the contact.',
    example: 'c8a1b2c3-d4e5-4f6g-h7i8-j9k0l1m2n3o4',
  })
  @IsString()
  @IsNotEmpty()
  contactId: string;

  @ApiProperty({
    description: 'The relation/role of this contact for this student.',
    enum: ContactTypes,
    example: ContactTypes.PARENT,
  })
  @IsEnum(ContactTypes)
  @IsOptional()
  relation?: ContactTypes = ContactTypes.PARENT;
}

export class InlineCreateContactDto {
  @ApiProperty({ example: 'John', description: 'First name of the contact.' })
  @IsString()
  @IsNotEmpty({ message: 'Contact name cannot be empty.' })
  name: string;

  @ApiProperty({ example: 'Doe', description: 'Last name of the contact.' })
  @IsString()
  @IsNotEmpty({ message: 'Contact surname cannot be empty.' })
  surname: string;

  @ApiProperty({
    example: '+20 120 574 45 45',
    description: 'Primary phone number. Required when creating a new contact.',
    required: false,
  })
  @IsString()
  @IsOptional()
  phoneNumber?: string;

  @ApiProperty({
    example: '+20 120 574 45 45',
    description:
      'WhatsApp phone number. Required when creating a new contact.',
    required: false,
  })
  @IsString()
  @IsOptional()
  whatsappPhoneNumber?: string;

  @ApiProperty({
    example: '+20 120 574 45 46',
    required: false,
  })
  @IsString()
  @IsOptional()
  secondaryPhoneNumber?: string;

  @ApiProperty({
    example: 'parent@example.com',
    description:
      'Email used to check for an existing contact. If found, the existing contact is linked instead of creating a new one.',
    required: false,
  })
  @IsString()
  @IsOptional()
  email?: string;

  @ApiProperty({
    description: 'Relation of this contact to the student.',
    enum: ContactTypes,
    example: ContactTypes.PARENT,
    required: false,
  })
  @IsEnum(ContactTypes)
  @IsOptional()
  relation?: ContactTypes = ContactTypes.PARENT;
}

export class CreateStudentDto {
  // --- USER AUTHENTICATION FIELDS ---
  @ApiProperty({
    description: 'Existing User ID to link the student profile to.',
    example: '29d7b3d1-0f41-4558-ae08-5bef4f45c054',
    required: false,
  })
  @IsString()
  @IsOptional()
  userId?: string;

  @ApiProperty({
    description: 'Email for a new user account.',
    example: 'student@example.com',
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
    example: [Role.STUDENT],
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

  @ApiProperty({
    description:
      'Array of Contacts to link to this student with their specific relations.',
    type: [LinkContactDto],
    required: false,
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => LinkContactDto)
  @IsOptional()
  contacts?: LinkContactDto[];

  @ApiProperty({
    description:
      'Array of existing contact UUIDs to link to this student (relation defaults to PARENT).',
    example: ['c8a1b2c3-d4e5-4f6g-h7i8-j9k0l1m2n3o4'],
    required: false,
  })
  @IsArray()
  @IsUUID('4', { each: true })
  @IsOptional()
  contactIds?: string[];

  @ApiProperty({
    description:
      'Array of new contacts to create and link in one request. If email is provided and a contact with that email already exists, the existing contact is linked instead.',
    type: [InlineCreateContactDto],
    required: false,
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => InlineCreateContactDto)
  @IsOptional()
  newContacts?: InlineCreateContactDto[];
}
