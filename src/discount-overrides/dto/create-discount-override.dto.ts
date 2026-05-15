import { IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { DiscountType } from '@prisma/client';

export class CreateDiscountOverrideDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  discountId: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  programLocationId: string;

  @ApiPropertyOptional({ default: true })
  @IsBoolean()
  @IsOptional()
  isEnabled?: boolean;

  @ApiPropertyOptional({ description: 'Override the academy-level discount value' })
  @IsNumber()
  @Min(0)
  @IsOptional()
  valueOverride?: number;

  @ApiPropertyOptional({ enum: DiscountType })
  @IsEnum(DiscountType)
  @IsOptional()
  typeOverride?: DiscountType;
}
