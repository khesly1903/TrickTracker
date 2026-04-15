/*
  Warnings:

  - Changed the column `type` on the `Contact` table from a scalar field to a list field. If there are non-null values in that column, this step will fail.

*/
-- AlterEnum
ALTER TYPE "Role" ADD VALUE 'MANAGER';

-- AlterTable
ALTER TABLE "Contact" ALTER COLUMN "type" DROP DEFAULT;
ALTER TABLE "Contact" ALTER COLUMN "type" SET DATA TYPE "ContactTypes"[] USING ARRAY["type"]::"ContactTypes"[];
