-- AlterTable
ALTER TABLE "Class" ADD COLUMN     "academyId" TEXT;

-- AlterTable
ALTER TABLE "Contact" ADD COLUMN     "academyId" TEXT;

-- AlterTable
ALTER TABLE "Instructor" ADD COLUMN     "academyId" TEXT;

-- AlterTable
ALTER TABLE "Location" ADD COLUMN     "academyId" TEXT;

-- AlterTable
ALTER TABLE "Program" ADD COLUMN     "academyId" TEXT;

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "academyId" TEXT;

-- CreateTable
CREATE TABLE "Academy" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "logoUrl" TEXT,
    "phone" TEXT,
    "address" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "ownerId" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "Academy_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Academy_ownerId_key" ON "Academy"("ownerId");

-- CreateIndex
CREATE INDEX "Class_academyId_idx" ON "Class"("academyId");

-- CreateIndex
CREATE INDEX "Contact_academyId_idx" ON "Contact"("academyId");

-- CreateIndex
CREATE INDEX "Instructor_academyId_idx" ON "Instructor"("academyId");

-- CreateIndex
CREATE INDEX "Location_academyId_idx" ON "Location"("academyId");

-- CreateIndex
CREATE INDEX "Program_academyId_idx" ON "Program"("academyId");

-- CreateIndex
CREATE INDEX "Student_academyId_idx" ON "Student"("academyId");

-- AddForeignKey
ALTER TABLE "Academy" ADD CONSTRAINT "Academy_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_academyId_fkey" FOREIGN KEY ("academyId") REFERENCES "Academy"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_academyId_fkey" FOREIGN KEY ("academyId") REFERENCES "Academy"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Instructor" ADD CONSTRAINT "Instructor_academyId_fkey" FOREIGN KEY ("academyId") REFERENCES "Academy"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_academyId_fkey" FOREIGN KEY ("academyId") REFERENCES "Academy"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Program" ADD CONSTRAINT "Program_academyId_fkey" FOREIGN KEY ("academyId") REFERENCES "Academy"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_academyId_fkey" FOREIGN KEY ("academyId") REFERENCES "Academy"("id") ON DELETE SET NULL ON UPDATE CASCADE;
