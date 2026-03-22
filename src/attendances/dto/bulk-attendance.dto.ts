import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class AttendanceItemDto {
  @ApiProperty({
    description: 'The student enrollment ID (StudentProgram ID)',
    example: 'bd4d7c2a-1234-abcd-9876-b9a5c4d3e2f1',
  })
  @IsString()
  @IsNotEmpty()
  studentProgramId: string;

  @ApiProperty({
    description: 'Whether the student attended the class',
    example: true,
  })
  @IsBoolean()
  @IsNotEmpty()
  attended: boolean;

  @ApiPropertyOptional({
    description: 'Optional note for this specific attendance',
    example: 'Late by 10 minutes',
  })
  @IsString()
  @IsOptional()
  note?: string;
}

export class BulkAttendanceDto {
  @ApiProperty({
    description: 'The specific program session ID',
    example: 'ca58ae9b-0b3c-4b1a-9c1a-1a2b3c4d5e6f',
  })
  @IsString()
  @IsNotEmpty()
  programSessionId: string;

  @ApiProperty({
    description: 'List of attendance records for the session',
    type: [AttendanceItemDto],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AttendanceItemDto)
  attendances: AttendanceItemDto[];
}
