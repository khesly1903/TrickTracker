import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { PriceOptionsService } from './price-options.service';
import { PriceOptionsController } from './price-options.controller';

@Module({
  imports: [DatabaseModule],
  providers: [PriceOptionsService],
  controllers: [PriceOptionsController],
  exports: [PriceOptionsService],
})
export class PriceOptionsModule {}
