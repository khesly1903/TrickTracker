/*
  Warnings:

  - You are about to drop the column `programId` on the `ProgramSkill` table. All the data in the column will be lost.
  - You are about to drop the column `stage` on the `ProgramSkill` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[stageId,name]` on the table `ProgramSkill` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `stageId` to the `ProgramSkill` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ProgramSkill" DROP CONSTRAINT "ProgramSkill_programId_fkey";

-- DropIndex
DROP INDEX "ProgramSkill_programId_name_key";

-- AlterTable
ALTER TABLE "ProgramSkill" DROP COLUMN "programId",
DROP COLUMN "stage",
ADD COLUMN     "description" TEXT,
ADD COLUMN     "stageId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ProgramStage" ADD COLUMN     "description" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "ProgramSkill_stageId_name_key" ON "ProgramSkill"("stageId", "name");

-- AddForeignKey
ALTER TABLE "ProgramSkill" ADD CONSTRAINT "ProgramSkill_stageId_fkey" FOREIGN KEY ("stageId") REFERENCES "ProgramStage"("id") ON DELETE CASCADE ON UPDATE CASCADE;
