/*
  Warnings:

  - You are about to drop the column `maxLevel` on the `Program` table. All the data in the column will be lost.
  - You are about to drop the column `minLevel` on the `Program` table. All the data in the column will be lost.
  - You are about to drop the column `stage` on the `Program` table. All the data in the column will be lost.
  - Changed the type of `stage` on the `ProgramSkill` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Program" DROP COLUMN "maxLevel",
DROP COLUMN "minLevel",
DROP COLUMN "stage",
ADD COLUMN     "level" TEXT;

-- AlterTable
ALTER TABLE "ProgramSkill" DROP COLUMN "stage",
ADD COLUMN     "stage" TEXT NOT NULL;

-- DropEnum
DROP TYPE "ProgramLevels";

-- DropEnum
DROP TYPE "Stage";

-- CreateTable
CREATE TABLE "ProgramStage" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "programId" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "ProgramStage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProgramStage_programId_name_key" ON "ProgramStage"("programId", "name");

-- AddForeignKey
ALTER TABLE "ProgramStage" ADD CONSTRAINT "ProgramStage_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE CASCADE ON UPDATE CASCADE;
