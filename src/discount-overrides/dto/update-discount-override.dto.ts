import { PartialType } from '@nestjs/swagger';
import { OmitType } from '@nestjs/swagger';
import { CreateDiscountOverrideDto } from './create-discount-override.dto';

export class UpdateDiscountOverrideDto extends PartialType(
  OmitType(CreateDiscountOverrideDto, ['discountId', 'programLocationId'] as const),
) {}
