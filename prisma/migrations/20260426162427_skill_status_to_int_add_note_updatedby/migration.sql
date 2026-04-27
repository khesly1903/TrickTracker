-- Migrate SkillStatus enum → Integer (preserving existing data)
-- NOT_STARTED=0, LEARNING=1, WITH_HELP=2, MASTERED=3

-- Step 1: Add new int column alongside old enum column
ALTER TABLE "StudentProgramSkill" ADD COLUMN "status_new" INTEGER NOT NULL DEFAULT 0;

-- Step 2: Map existing enum values to integers
UPDATE "StudentProgramSkill" SET "status_new" = CASE
  WHEN status::text = 'NOT_STARTED' THEN 0
  WHEN status::text = 'LEARNING'    THEN 1
  WHEN status::text = 'WITH_HELP'   THEN 2
  WHEN status::text = 'MASTERED'    THEN 3
  ELSE 0
END;

-- Step 3: Drop old enum column, rename new int column
ALTER TABLE "StudentProgramSkill" DROP COLUMN "status";
ALTER TABLE "StudentProgramSkill" RENAME COLUMN "status_new" TO "status";

-- Step 4: Add new fields
ALTER TABLE "StudentProgramSkill" ADD COLUMN "note" TEXT;
ALTER TABLE "StudentProgramSkill" ADD COLUMN "updatedById" TEXT;

-- Step 5: Drop the SkillStatus enum type
DROP TYPE "SkillStatus";

-- Step 6: Add FK for updatedById → User
ALTER TABLE "StudentProgramSkill" ADD CONSTRAINT "StudentProgramSkill_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
