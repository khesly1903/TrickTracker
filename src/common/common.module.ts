import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { EnrollmentIdService } from './services/enrollment-id.service';

@Module({
  imports: [DatabaseModule],
  providers: [EnrollmentIdService],
  exports: [EnrollmentIdService],
})
export class CommonModule {}
