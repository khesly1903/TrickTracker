import { Module } from '@nestjs/common';
import { ProgramSkillsService } from './program-skills.service';
import { ProgramSkillsController } from './program-skills.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [ProgramSkillsService],
  controllers: [ProgramSkillsController],
})
export class ProgramSkillsModule {}
