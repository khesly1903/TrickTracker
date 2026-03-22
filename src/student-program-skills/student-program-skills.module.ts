import { Module } from '@nestjs/common';
import { StudentProgramSkillsService } from './student-program-skills.service';
import { StudentProgramSkillsController } from './student-program-skills.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [StudentProgramSkillsService],
  controllers: [StudentProgramSkillsController],
  exports: [StudentProgramSkillsService],
})
export class StudentProgramSkillsModule {}
