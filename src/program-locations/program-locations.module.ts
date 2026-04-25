import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ProgramLocationsService } from './program-locations.service';
import { ProgramLocationsController } from './program-locations.controller';

@Module({
  imports: [DatabaseModule],
  providers: [ProgramLocationsService],
  controllers: [ProgramLocationsController],
  exports: [ProgramLocationsService],
})
export class ProgramLocationsModule {}
