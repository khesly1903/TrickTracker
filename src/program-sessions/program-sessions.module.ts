import { Module } from '@nestjs/common';
import { ProgramSessionsService } from './program-sessions.service';
import { ProgramSessionsController } from './program-sessions.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [ProgramSessionsService],
  controllers: [ProgramSessionsController],
})
export class ProgramSessionsModule {}
