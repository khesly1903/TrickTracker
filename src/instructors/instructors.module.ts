import { Module } from '@nestjs/common';
import { InstructorsController } from './instructors.controller';
import { InstructorsService } from './instructors.service';
import { DatabaseModule } from '../database/database.module';
import { CommonModule } from '../common/common.module';

@Module({
  imports: [DatabaseModule, CommonModule],
  controllers: [InstructorsController],
  providers: [InstructorsService],
})
export class InstructorsModule {}
