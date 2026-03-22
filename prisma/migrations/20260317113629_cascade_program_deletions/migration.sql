-- DropForeignKey
ALTER TABLE "Attendance" DROP CONSTRAINT "Attendance_studentProgramId_fkey";

-- DropForeignKey
ALTER TABLE "ProgramSchedule" DROP CONSTRAINT "ProgramSchedule_programId_fkey";

-- DropForeignKey
ALTER TABLE "ProgramSkill" DROP CONSTRAINT "ProgramSkill_programId_fkey";

-- DropForeignKey
ALTER TABLE "StudentProgram" DROP CONSTRAINT "StudentProgram_programId_fkey";

-- AddForeignKey
ALTER TABLE "ProgramSchedule" ADD CONSTRAINT "ProgramSchedule_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attendance" ADD CONSTRAINT "Attendance_studentProgramId_fkey" FOREIGN KEY ("studentProgramId") REFERENCES "StudentProgram"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentProgram" ADD CONSTRAINT "StudentProgram_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProgramSkill" ADD CONSTRAINT "ProgramSkill_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE CASCADE ON UPDATE CASCADE;
