/*
  Warnings:

  - You are about to drop the column `capcaity` on the `Program` table. All the data in the column will be lost.
  - You are about to drop the column `instructorId` on the `Program` table. All the data in the column will be lost.
  - You are about to drop the column `locationId` on the `Program` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Program` table. All the data in the column will be lost.
  - You are about to drop the column `programId` on the `ProgramSchedule` table. All the data in the column will be lost.
  - You are about to drop the column `programId` on the `ProgramSession` table. All the data in the column will be lost.
  - You are about to drop the column `programId` on the `StudentProgram` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[studentId,programLocationId]` on the table `StudentProgram` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `programLocationId` to the `ProgramSchedule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `programLocationId` to the `ProgramSession` table without a default value. This is not possible if the table is not empty.
  - Added the required column `programLocationId` to the `StudentProgram` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Program" DROP CONSTRAINT "Program_instructorId_fkey";

-- DropForeignKey
ALTER TABLE "Program" DROP CONSTRAINT "Program_locationId_fkey";

-- DropForeignKey
ALTER TABLE "ProgramSchedule" DROP CONSTRAINT "ProgramSchedule_programId_fkey";

-- DropForeignKey
ALTER TABLE "ProgramSession" DROP CONSTRAINT "ProgramSession_programId_fkey";

-- DropForeignKey
ALTER TABLE "StudentProgram" DROP CONSTRAINT "StudentProgram_programId_fkey";

-- DropForeignKey
ALTER TABLE "_BackupInstructors" DROP CONSTRAINT "_BackupInstructors_B_fkey";

-- DropIndex
DROP INDEX "StudentProgram_studentId_programId_key";

-- AlterTable
ALTER TABLE "Program" DROP COLUMN "capcaity",
DROP COLUMN "instructorId",
DROP COLUMN "locationId",
DROP COLUMN "price";

-- AlterTable
ALTER TABLE "ProgramSchedule" DROP COLUMN "programId",
ADD COLUMN     "programLocationId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ProgramSession" DROP COLUMN "programId",
ADD COLUMN     "programLocationId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "StudentProgram" DROP COLUMN "programId",
ADD COLUMN     "programLocationId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "ProgramLocation" (
    "id" TEXT NOT NULL,
    "programId" TEXT NOT NULL,
    "locationId" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "capacity" INTEGER NOT NULL,
    "instructorId" TEXT,

    CONSTRAINT "ProgramLocation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProgramLocation_programId_locationId_key" ON "ProgramLocation"("programId", "locationId");

-- CreateIndex
CREATE UNIQUE INDEX "StudentProgram_studentId_programLocationId_key" ON "StudentProgram"("studentId", "programLocationId");

-- AddForeignKey
ALTER TABLE "ProgramLocation" ADD CONSTRAINT "ProgramLocation_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProgramLocation" ADD CONSTRAINT "ProgramLocation_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProgramLocation" ADD CONSTRAINT "ProgramLocation_instructorId_fkey" FOREIGN KEY ("instructorId") REFERENCES "Instructor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProgramSchedule" ADD CONSTRAINT "ProgramSchedule_programLocationId_fkey" FOREIGN KEY ("programLocationId") REFERENCES "ProgramLocation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProgramSession" ADD CONSTRAINT "ProgramSession_programLocationId_fkey" FOREIGN KEY ("programLocationId") REFERENCES "ProgramLocation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentProgram" ADD CONSTRAINT "StudentProgram_programLocationId_fkey" FOREIGN KEY ("programLocationId") REFERENCES "ProgramLocation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BackupInstructors" ADD CONSTRAINT "_BackupInstructors_B_fkey" FOREIGN KEY ("B") REFERENCES "ProgramLocation"("id") ON DELETE CASCADE ON UPDATE CASCADE;
