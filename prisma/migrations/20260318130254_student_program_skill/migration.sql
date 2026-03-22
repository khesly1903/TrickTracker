/*
  Warnings:

  - The primary key for the `ProgramSkill` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `StudentSkill` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[programId,skillId]` on the table `ProgramSkill` will be added. If there are existing duplicate values, this will fail.
  - The required column `id` was added to the `ProgramSkill` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "StudentSkill" DROP CONSTRAINT "StudentSkill_skillId_fkey";

-- DropForeignKey
ALTER TABLE "StudentSkill" DROP CONSTRAINT "StudentSkill_studentId_fkey";

-- AlterTable
ALTER TABLE "ProgramSkill" DROP CONSTRAINT "ProgramSkill_pkey",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "ProgramSkill_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "StudentSkill";

-- CreateTable
CREATE TABLE "StudentProgramSkill" (
    "id" TEXT NOT NULL,
    "studentProgramId" TEXT NOT NULL,
    "programSkillId" TEXT NOT NULL,
    "status" "SkillStatus" NOT NULL DEFAULT 'NOT_STARTED',
    "achievedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "StudentProgramSkill_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "StudentProgramSkill_studentProgramId_programSkillId_key" ON "StudentProgramSkill"("studentProgramId", "programSkillId");

-- CreateIndex
CREATE UNIQUE INDEX "ProgramSkill_programId_skillId_key" ON "ProgramSkill"("programId", "skillId");

-- AddForeignKey
ALTER TABLE "StudentProgramSkill" ADD CONSTRAINT "StudentProgramSkill_studentProgramId_fkey" FOREIGN KEY ("studentProgramId") REFERENCES "StudentProgram"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentProgramSkill" ADD CONSTRAINT "StudentProgramSkill_programSkillId_fkey" FOREIGN KEY ("programSkillId") REFERENCES "ProgramSkill"("id") ON DELETE CASCADE ON UPDATE CASCADE;
