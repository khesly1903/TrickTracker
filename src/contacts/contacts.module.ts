import { Module } from '@nestjs/common';
import { ContactsController } from './contacts.controller';
import { ContactsService } from './contacts.service';
import { DatabaseModule } from '../database/database.module';
import { CommonModule } from '../common/common.module';

@Module({
  imports: [DatabaseModule, CommonModule],
  controllers: [ContactsController],
  providers: [ContactsService],
})
export class ContactsModule {}
