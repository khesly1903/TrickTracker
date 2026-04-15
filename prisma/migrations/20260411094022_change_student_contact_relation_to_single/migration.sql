-- AlterTable
ALTER TABLE "StudentContact" ALTER COLUMN "relation" DROP DEFAULT;
ALTER TABLE "StudentContact" ALTER COLUMN "relation" SET DATA TYPE "ContactTypes" USING (COALESCE("relation"[1], 'PARENT'));
ALTER TABLE "StudentContact" ALTER COLUMN "relation" SET DEFAULT 'PARENT';
ALTER TABLE "StudentContact" ALTER COLUMN "relation" SET NOT NULL;
