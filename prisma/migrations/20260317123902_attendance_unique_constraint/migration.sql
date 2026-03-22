/*
  Warnings:

  - A unique constraint covering the columns `[studentProgramId,programSessionId]` on the table `Attendance` will be added. If there are existing duplicate values, this will fail.
  - Made the column `programSessionId` on table `Attendance` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Attendance" ALTER COLUMN "programSessionId" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Attendance_studentProgramId_programSessionId_key" ON "Attendance"("studentProgramId", "programSessionId");
