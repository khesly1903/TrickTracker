/*
  Warnings:

  - You are about to drop the column `Stage` on the `Program` table. All the data in the column will be lost.
  - You are about to drop the column `isCancelled` on the `ProgramSession` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Program" DROP COLUMN "Stage",
ADD COLUMN     "stage" "Stage"[];

-- AlterTable
ALTER TABLE "ProgramSchedule" ALTER COLUMN "startTime" SET DATA TYPE TIMESTAMPTZ,
ALTER COLUMN "endTime" SET DATA TYPE TIMESTAMPTZ;

-- AlterTable
ALTER TABLE "ProgramSession" DROP COLUMN "isCancelled",
ADD COLUMN     "scheduleId" TEXT;

-- AddForeignKey
ALTER TABLE "ProgramSession" ADD CONSTRAINT "ProgramSession_scheduleId_fkey" FOREIGN KEY ("scheduleId") REFERENCES "ProgramSchedule"("id") ON DELETE SET NULL ON UPDATE CASCADE;
