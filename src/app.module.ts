import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { RolesGuard } from './auth/guards/roles.guard';
import { AcademyRequiredGuard } from './auth/guards/academy-required.guard';
import { AcademiesModule } from './academies/academies.module';
import { UsersModule } from './users/users.module';
import { StudentsModule } from './students/students.module';
import { InstructorsModule } from './instructors/instructors.module';
import { ContactsModule } from './contacts/contacts.module';
import { ClassesModule } from './classes/classes.module';
import { ProgramsModule } from './programs/programs.module';
import { LocationsModule } from './locations/locations.module';
import { ProgramSessionsModule } from './program-sessions/program-sessions.module';
import { AttendancesModule } from './attendances/attendances.module';
import { StudentProgramSkillsModule } from './student-program-skills/student-program-skills.module';
import { StudentProgramsModule } from './student-programs/student-programs.module';
import { ProgramSkillsModule } from './program-skills/program-skills.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ProgramLocationsModule } from './program-locations/program-locations.module';
import { ProgramSchedulesModule } from './program-schedules/program-schedules.module';
import { ProgramStagesModule } from './program-stages/program-stages.module';

@Module({
  imports: [
    DatabaseModule,
    AuthModule,
    AcademiesModule,
    UsersModule,
    StudentsModule,
    InstructorsModule,
    ContactsModule,
    ClassesModule,
    ProgramsModule,
    LocationsModule,
    ProgramSessionsModule,
    AttendancesModule,
    StudentProgramSkillsModule,
    StudentProgramsModule,
    ProgramSkillsModule,
    DashboardModule,
    ProgramLocationsModule,
    ProgramSchedulesModule,
    ProgramStagesModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_GUARD, useClass: JwtAuthGuard },
    { provide: APP_GUARD, useClass: RolesGuard },
    { provide: APP_GUARD, useClass: AcademyRequiredGuard },
  ],
})
export class AppModule {}
