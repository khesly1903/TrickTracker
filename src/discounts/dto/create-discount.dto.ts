import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { DiscountType } from '@prisma/client';

export class CreateDiscountDto {
  @ApiProperty({ example: 'Sibling Discount' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 15, description: 'Discount value (percentage or flat amount)' })
  @IsNumber()
  @Min(0)
  value: number;

  @ApiProperty({ enum: DiscountType })
  @IsEnum(DiscountType)
  type: DiscountType;

  @ApiPropertyOptional({ example: '15% off for siblings' })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiPropertyOptional({ default: true })
  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}
