import { Module } from '@nestjs/common';
import { StudentProgramsService } from './student-programs.service';
import { StudentProgramsController } from './student-programs.controller';
import { DatabaseModule } from '../database/database.module';
import { StudentProgramSkillsModule } from '../student-program-skills/student-program-skills.module';

@Module({
  imports: [DatabaseModule, StudentProgramSkillsModule],
  providers: [StudentProgramsService],
  controllers: [StudentProgramsController],
})
export class StudentProgramsModule {}
