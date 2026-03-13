-- AlterTable
ALTER TABLE "Contact" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ALTER COLUMN "secondaryPhoneNumber" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Instructor" ALTER COLUMN "secondaryPhoneNumber" DROP NOT NULL;
