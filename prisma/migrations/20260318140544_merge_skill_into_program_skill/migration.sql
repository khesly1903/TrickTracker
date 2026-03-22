/*
  Warnings:

  - You are about to drop the column `skillId` on the `ProgramSkill` table. All the data in the column will be lost.
  - You are about to drop the `Skill` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[programId,name]` on the table `ProgramSkill` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `ProgramSkill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `ProgramSkill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `ProgramSkill` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ProgramSkill" DROP CONSTRAINT "ProgramSkill_skillId_fkey";

-- DropIndex
DROP INDEX "ProgramSkill_programId_skillId_key";

-- AlterTable
ALTER TABLE "ProgramSkill" DROP COLUMN "skillId",
ADD COLUMN     "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "type" "SkillType" NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMPTZ NOT NULL;

-- DropTable
DROP TABLE "Skill";

-- CreateIndex
CREATE UNIQUE INDEX "ProgramSkill_programId_name_key" ON "ProgramSkill"("programId", "name");
