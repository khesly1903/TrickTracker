-- NULL out any updatedById values that don't exist in Instructor (leftover test data)
UPDATE "StudentProgramSkill"
SET "updatedById" = NULL
WHERE "updatedById" IS NOT NULL
  AND "updatedById" NOT IN (SELECT id FROM "Instructor");

-- DropForeignKey
ALTER TABLE "StudentProgramSkill" DROP CONSTRAINT "StudentProgramSkill_updatedById_fkey";

-- AddForeignKey
ALTER TABLE "StudentProgramSkill" ADD CONSTRAINT "StudentProgramSkill_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "Instructor"("id") ON DELETE SET NULL ON UPDATE CASCADE;
