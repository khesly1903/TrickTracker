import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { PaymentType } from '@prisma/client';

export class CreatePaymentDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  studentProgramId: string;

  @ApiProperty({ example: 500 })
  @IsNumber()
  @Min(0)
  amount: number;

  @ApiProperty({ example: '2025-06-01T10:00:00Z' })
  @IsDateString()
  paidAt: string;

  @ApiPropertyOptional({ example: 'CASH', description: 'CASH | CARD | TRANSFER' })
  @IsString()
  @IsOptional()
  method?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  note?: string;

  @ApiPropertyOptional({ enum: PaymentType, default: PaymentType.PAYMENT })
  @IsEnum(PaymentType)
  @IsOptional()
  type?: PaymentType;
}
