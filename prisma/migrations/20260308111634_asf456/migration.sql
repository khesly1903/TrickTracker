/*
  Warnings:

  - You are about to drop the column `date` on the `Attendance` table. All the data in the column will be lost.
  - You are about to drop the column `studentProgramProgramId` on the `Attendance` table. All the data in the column will be lost.
  - You are about to drop the column `studentProgramStudentId` on the `Attendance` table. All the data in the column will be lost.
  - The `type` column on the `Class` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `phone_number` on the `Contact` table. All the data in the column will be lost.
  - You are about to drop the column `second_phone_number` on the `Contact` table. All the data in the column will be lost.
  - The `type` column on the `Contact` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `max_age` on the `Program` table. All the data in the column will be lost.
  - You are about to drop the column `max_level` on the `Program` table. All the data in the column will be lost.
  - You are about to drop the column `min_age` on the `Program` table. All the data in the column will be lost.
  - You are about to drop the column `min_level` on the `Program` table. All the data in the column will be lost.
  - You are about to drop the column `studentId` on the `Program` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[studentProgramId,programSessionId]` on the table `Attendance` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `Contact` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Contact` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `Instructor` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `Student` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `programSessionId` to the `Attendance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `studentProgramId` to the `Attendance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Attendance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `secondaryPhoneNumber` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `Instructor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `secondaryPhoneNumber` to the `Instructor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `surname` to the `Instructor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Instructor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Location` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maxAge` to the `Program` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maxLevel` to the `Program` table without a default value. This is not possible if the table is not empty.
  - Added the required column `minAge` to the `Program` table without a default value. This is not possible if the table is not empty.
  - Added the required column `minLevel` to the `Program` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Program` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Skill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Student` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `StudentProgram` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- CreateEnum
CREATE TYPE "StudentType" AS ENUM ('CHILD', 'ADULT');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'INSTRUCTOR', 'PARENT', 'STUDENT', 'VISITOR');

-- CreateEnum
CREATE TYPE "ClassTypes" AS ENUM ('PRIVATE', 'GROUP');

-- CreateEnum
CREATE TYPE "ContactTypes" AS ENUM ('PARENT', 'GUARDIAN', 'EMERGENCY');

-- CreateEnum
CREATE TYPE "ProgramLevels" AS ENUM ('BEGINNER', 'INTERMEDIATE', 'TODDLER', 'ALL_LEVELS');

-- CreateEnum
CREATE TYPE "SkillStatus" AS ENUM ('NOT_STARTED', 'LEARNING', 'MASTERED');

-- DropForeignKey
ALTER TABLE "Attendance" DROP CONSTRAINT "Attendance_studentProgramStudentId_studentProgramProgramId_fkey";

-- AlterTable
ALTER TABLE "Attendance" DROP COLUMN "date",
DROP COLUMN "studentProgramProgramId",
DROP COLUMN "studentProgramStudentId",
ADD COLUMN     "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "note" TEXT,
ADD COLUMN     "programSessionId" TEXT NOT NULL,
ADD COLUMN     "studentProgramId" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMPTZ NOT NULL;

-- AlterTable
ALTER TABLE "Class" ADD COLUMN     "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "updatedAt" TIMESTAMPTZ NOT NULL,
DROP COLUMN "type",
ADD COLUMN     "type" "ClassTypes" NOT NULL DEFAULT 'GROUP';

-- AlterTable
ALTER TABLE "Contact" DROP COLUMN "phone_number",
DROP COLUMN "second_phone_number",
ADD COLUMN     "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "phoneNumber" TEXT NOT NULL,
ADD COLUMN     "secondaryPhoneNumber" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMPTZ NOT NULL,
ADD COLUMN     "userId" TEXT,
DROP COLUMN "type",
ADD COLUMN     "type" "ContactTypes" NOT NULL DEFAULT 'PARENT',
ALTER COLUMN "email" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Instructor" ADD COLUMN     "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "phoneNumber" TEXT NOT NULL,
ADD COLUMN     "secondaryPhoneNumber" TEXT NOT NULL,
ADD COLUMN     "surname" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMPTZ NOT NULL,
ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "Location" ADD COLUMN     "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMPTZ NOT NULL;

-- AlterTable
ALTER TABLE "Program" DROP COLUMN "max_age",
DROP COLUMN "max_level",
DROP COLUMN "min_age",
DROP COLUMN "min_level",
DROP COLUMN "studentId",
ADD COLUMN     "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "maxAge" INTEGER NOT NULL,
ADD COLUMN     "maxLevel" "ProgramLevels" NOT NULL,
ADD COLUMN     "minAge" INTEGER NOT NULL,
ADD COLUMN     "minLevel" "ProgramLevels" NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMPTZ NOT NULL;

-- AlterTable
ALTER TABLE "ProgramSkill" ADD CONSTRAINT "ProgramSkill_pkey" PRIMARY KEY ("programId", "skillId");

-- DropIndex
DROP INDEX "ProgramSkill_programId_skillId_key";

-- AlterTable
ALTER TABLE "Skill" ADD COLUMN     "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMPTZ NOT NULL;

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "type" "StudentType" NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMPTZ NOT NULL,
ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "StudentContact" ADD CONSTRAINT "StudentContact_pkey" PRIMARY KEY ("studentId", "contactId");

-- DropIndex
DROP INDEX "StudentContact_studentId_contactId_key";

-- AlterTable
ALTER TABLE "StudentProgram" ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD CONSTRAINT "StudentProgram_pkey" PRIMARY KEY ("id");

-- DropEnum
DROP TYPE "Class_levels";

-- DropEnum
DROP TYPE "Class_types";

-- DropEnum
DROP TYPE "Contact_Types";

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "roles" "Role"[],
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "lastLoginAt" TIMESTAMP(3),
    "refreshToken" TEXT,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudentSkill" (
    "id" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "skillId" TEXT NOT NULL,
    "status" "SkillStatus" NOT NULL DEFAULT 'NOT_STARTED',
    "achievedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "StudentSkill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProgramSession" (
    "id" TEXT NOT NULL,
    "programId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "notes" TEXT,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "ProgramSession_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "StudentSkill_studentId_skillId_key" ON "StudentSkill"("studentId", "skillId");

-- CreateIndex
CREATE UNIQUE INDEX "Attendance_studentProgramId_programSessionId_key" ON "Attendance"("studentProgramId", "programSessionId");

-- CreateIndex
CREATE UNIQUE INDEX "Contact_userId_key" ON "Contact"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Contact_email_key" ON "Contact"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Instructor_userId_key" ON "Instructor"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Student_userId_key" ON "Student"("userId");

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Instructor" ADD CONSTRAINT "Instructor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentSkill" ADD CONSTRAINT "StudentSkill_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentSkill" ADD CONSTRAINT "StudentSkill_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProgramSession" ADD CONSTRAINT "ProgramSession_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attendance" ADD CONSTRAINT "Attendance_studentProgramId_fkey" FOREIGN KEY ("studentProgramId") REFERENCES "StudentProgram"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attendance" ADD CONSTRAINT "Attendance_programSessionId_fkey" FOREIGN KEY ("programSessionId") REFERENCES "ProgramSession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
