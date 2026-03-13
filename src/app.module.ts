import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { StudentsModule } from './students/students.module';
import { InstructorsModule } from './instructors/instructors.module';
import { ContactsModule } from './contacts/contacts.module';

@Module({
  imports: [DatabaseModule, UsersModule, StudentsModule, InstructorsModule, ContactsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
