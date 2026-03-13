import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateInstructorDto {
  // --- USER AUTHENTICATION FIELDS ---
  @ApiProperty({
    description: 'The unique ID of the associated user',
    example: '29d7b3d1-0f41-4558-ae08-5bef4f45c054',
  })
  @IsString()
  @IsNotEmpty({ message: 'User ID cannot be empty.' })
  userId: string;

  // --- INSTRUCTOR PROFILE FIELDS ---
  @ApiProperty({
    description: 'First name of the instructor',
    example: 'Alexander',
  })
  @IsString()
  @IsNotEmpty({ message: 'Name field cannot be empty.' })
  name: string;

  @ApiProperty({
    description: 'Surname of the instructor',
    example: 'Great',
  })
  @IsString()
  @IsNotEmpty({ message: 'Surname field cannot be empty.' })
  surname: string;

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
