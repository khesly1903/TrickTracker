import { Module } from '@nestjs/common';
import { AttendancesService } from './attendances.service';
import { AttendancesController } from './attendances.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [AttendancesService],
  controllers: [AttendancesController],
  exports: [AttendancesService],
})
export class AttendancesModule {}
