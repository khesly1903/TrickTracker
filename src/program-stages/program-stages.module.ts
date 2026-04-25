import { Module } from '@nestjs/common';
import { ProgramStagesController } from './program-stages.controller';
import { ProgramStagesService } from './program-stages.service';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ProgramStagesController],
  providers: [ProgramStagesService],
})
export class ProgramStagesModule {}
