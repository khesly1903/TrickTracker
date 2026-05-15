import { PartialType } from '@nestjs/swagger';
import { CreatePriceOptionDto } from './create-price-option.dto';
import { OmitType } from '@nestjs/swagger';

export class UpdatePriceOptionDto extends PartialType(
  OmitType(CreatePriceOptionDto, ['programLocationId'] as const),
) {}
