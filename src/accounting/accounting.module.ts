import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { AccountingService } from './accounting.service';
import { AccountingController } from './accounting.controller';

@Module({
  imports: [DatabaseModule],
  providers: [AccountingService],
  controllers: [AccountingController],
})
export class AccountingModule {}
