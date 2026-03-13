/*
  Warnings:

  - You are about to drop the column `programSessionId` on the `Attendance` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Program` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Program` table. All the data in the column will be lost.
  - You are about to drop the `ProgramSession` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `whatsappPhoneNumber` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `whatsappPhoneNumber` to the `Instructor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `capcaity` to the `Program` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Program` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stage` to the `ProgramSkill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Skill` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "SkillType" AS ENUM ('SKILL', 'TRICK');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('BOYS', 'GIRLS', 'ALL_GENDER');

-- CreateEnum
CREATE TYPE "DayOfWeek" AS ENUM ('MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY');

-- CreateEnum
CREATE TYPE "ScheduleType" AS ENUM ('CLASS', 'HOLIDAY', 'CANCELLED', 'MAKEUP');

-- CreateEnum
CREATE TYPE "Stage" AS ENUM ('BEGINNER', 'LOREM1', 'INTERMEDIATE', 'LOREM2', 'ADVANCED');

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "ClassTypes" ADD VALUE 'MAKEUP';
ALTER TYPE "ClassTypes" ADD VALUE 'WORKSHOP';
ALTER TYPE "ClassTypes" ADD VALUE 'EVENT';

-- AlterEnum
ALTER TYPE "Role" ADD VALUE 'OWNER';

-- AlterEnum
ALTER TYPE "SkillStatus" ADD VALUE 'WITH_HELP';

-- DropForeignKey
ALTER TABLE "Attendance" DROP CONSTRAINT "Attendance_programSessionId_fkey";

-- DropForeignKey
ALTER TABLE "ProgramSession" DROP CONSTRAINT "ProgramSession_programId_fkey";

-- DropIndex
DROP INDEX "Attendance_studentProgramId_programSessionId_key";

-- AlterTable
ALTER TABLE "Attendance" DROP COLUMN "programSessionId";

-- AlterTable
ALTER TABLE "Contact" ADD COLUMN     "whatsappPhoneNumber" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Instructor" ADD COLUMN     "whatsappPhoneNumber" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Program" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "Stage" "Stage"[],
ADD COLUMN     "capcaity" INTEGER NOT NULL,
ADD COLUMN     "gender" "Gender" NOT NULL DEFAULT 'ALL_GENDER',
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "requiredEquipment" TEXT[];

-- AlterTable
ALTER TABLE "ProgramSkill" ADD COLUMN     "stage" "Stage" NOT NULL;

-- AlterTable
ALTER TABLE "Skill" ADD COLUMN     "type" "SkillType" NOT NULL;

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "injuries" TEXT[],
ADD COLUMN     "phoneNumber" TEXT,
ADD COLUMN     "school" TEXT,
ADD COLUMN     "secondaryPhoneNumber" TEXT,
ADD COLUMN     "whatsappPhoneNumber" TEXT;

-- DropTable
DROP TABLE "ProgramSession";

-- CreateTable
CREATE TABLE "ProgramSchedule" (
    "id" TEXT NOT NULL,
    "dayOfWeek" "DayOfWeek" NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "duration" INTEGER NOT NULL,
    "endTime" TIMESTAMP(3),
    "type" "ScheduleType" NOT NULL,
    "programId" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "ProgramSchedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_BackupInstructors" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_BackupInstructors_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_BackupInstructors_B_index" ON "_BackupInstructors"("B");

-- AddForeignKey
ALTER TABLE "ProgramSchedule" ADD CONSTRAINT "ProgramSchedule_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BackupInstructors" ADD CONSTRAINT "_BackupInstructors_A_fkey" FOREIGN KEY ("A") REFERENCES "Instructor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BackupInstructors" ADD CONSTRAINT "_BackupInstructors_B_fkey" FOREIGN KEY ("B") REFERENCES "Program"("id") ON DELETE CASCADE ON UPDATE CASCADE;
