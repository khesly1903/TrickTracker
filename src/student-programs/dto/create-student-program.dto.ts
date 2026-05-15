import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateStudentProgramDto {
  @ApiProperty({ description: 'The Student ID to enroll' })
  @IsString()
  @IsNotEmpty()
  studentId: string;

  @ApiProperty({ description: 'The Program Location ID to enroll the student in' })
  @IsString()
  @IsNotEmpty()
  programLocationId: string;

  @ApiPropertyOptional({ description: 'Price option to apply at enrollment' })
  @IsString()
  @IsOptional()
  priceOptionId?: string;

  @ApiPropertyOptional({ description: 'Discount to apply (max 1)' })
  @IsString()
  @IsOptional()
  discountId?: string;

  @ApiPropertyOptional({ description: 'Enrollment start date for prorate calculation (default: now)' })
  @IsDateString()
  @IsOptional()
  enrollmentStartDate?: string;

  @ApiPropertyOptional({ description: 'Override base price (skips auto-prorate)' })
  @IsNumber()
  @Min(0)
  @IsOptional()
  overrideBasePrice?: number;
}
