import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { PriceKind, MonthlyBillingMode } from '@prisma/client';

export class CreatePriceOptionDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  programLocationId: string;

  @ApiProperty({ example: 'Monthly' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 1200 })
  @IsNumber()
  @Min(0)
  amount: number;

  @ApiPropertyOptional({ enum: PriceKind, default: PriceKind.CUSTOM })
  @IsEnum(PriceKind)
  @IsOptional()
  kind?: PriceKind;

  @ApiPropertyOptional({ example: 6, description: 'Sessions covered per month (legacy, FULL_PROGRAM optional)' })
  @IsInt()
  @Min(1)
  @IsOptional()
  sessionsCovered?: number;

  @ApiPropertyOptional({ enum: MonthlyBillingMode, description: 'Required when kind=MONTHLY' })
  @IsEnum(MonthlyBillingMode)
  @IsOptional()
  billingMode?: MonthlyBillingMode;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  description?: string;

  @ApiPropertyOptional({ default: false })
  @IsBoolean()
  @IsOptional()
  isDefault?: boolean;
}
