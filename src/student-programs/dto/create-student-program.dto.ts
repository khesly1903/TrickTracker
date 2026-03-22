import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateStudentProgramDto {
  @ApiProperty({
    description: 'The Student ID to enroll',
    example: 'bd4d7c2a-1234-abcd-9876-b9a5c4d3e2f1',
  })
  @IsString()
  @IsNotEmpty()
  studentId: string;

  @ApiProperty({
    description: 'The Program ID to enroll the student in',
    example: 'ca58ae9b-0b3c-4b1a-9c1a-1a2b3c4d5e6f',
  })
  @IsString()
  @IsNotEmpty()
  programId: string;
}
