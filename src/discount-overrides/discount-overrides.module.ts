import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { DiscountOverridesService } from './discount-overrides.service';
import { DiscountOverridesController } from './discount-overrides.controller';

@Module({
  imports: [DatabaseModule],
  providers: [DiscountOverridesService],
  controllers: [DiscountOverridesController],
  exports: [DiscountOverridesService],
})
export class DiscountOverridesModule {}
