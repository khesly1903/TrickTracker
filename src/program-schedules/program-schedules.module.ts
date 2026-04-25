import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ProgramSchedulesService } from './program-schedules.service';
import { ProgramSchedulesController } from './program-schedules.controller';

@Module({
  imports: [DatabaseModule],
  providers: [ProgramSchedulesService],
  controllers: [ProgramSchedulesController],
})
export class ProgramSchedulesModule {}
