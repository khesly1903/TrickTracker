/*
  Warnings:

  - The values [LOREM1,LOREM2] on the enum `Stage` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Stage_new" AS ENUM ('BEGINNER', 'INTERMEDIATE', 'ADVANCED');
ALTER TABLE "Program" ALTER COLUMN "Stage" TYPE "Stage_new"[] USING ("Stage"::text::"Stage_new"[]);
ALTER TABLE "ProgramSkill" ALTER COLUMN "stage" TYPE "Stage_new" USING ("stage"::text::"Stage_new");
ALTER TYPE "Stage" RENAME TO "Stage_old";
ALTER TYPE "Stage_new" RENAME TO "Stage";
DROP TYPE "public"."Stage_old";
COMMIT;
