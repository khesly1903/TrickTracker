/*
  Warnings:

  - You are about to drop the `Test` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Contact_Types" AS ENUM ('PARENT', 'GUARDIAN', 'EMERGANCY');

-- CreateEnum
CREATE TYPE "Class_types" AS ENUM ('PRIVATE', 'GROUP');

-- CreateEnum
CREATE TYPE "Class_levels" AS ENUM ('BEGINNER', 'INTERMEDIATE', 'TODDLER', 'ALL_LEVELS');

-- DropTable
DROP TABLE "Test";

-- CreateTable
CREATE TABLE "Student" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "dob" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contact" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "Contact_Types" NOT NULL DEFAULT 'PARENT',
    "surname" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "second_phone_number" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudentContact" (
    "studentId" TEXT NOT NULL,
    "contactId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Class" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "Class_types" NOT NULL DEFAULT 'GROUP',

    CONSTRAINT "Class_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Program" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "min_age" INTEGER NOT NULL,
    "max_age" INTEGER NOT NULL,
    "min_level" "Class_levels" NOT NULL,
    "max_level" "Class_levels" NOT NULL,
    "classId" TEXT NOT NULL,

    CONSTRAINT "Program_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProgramSkill" (
    "programId" TEXT NOT NULL,
    "skillId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "StudentContact_studentId_contactId_key" ON "StudentContact"("studentId", "contactId");

-- CreateIndex
CREATE UNIQUE INDEX "ProgramSkill_programId_skillId_key" ON "ProgramSkill"("programId", "skillId");

-- AddForeignKey
ALTER TABLE "StudentContact" ADD CONSTRAINT "StudentContact_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentContact" ADD CONSTRAINT "StudentContact_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "Contact"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Program" ADD CONSTRAINT "Program_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProgramSkill" ADD CONSTRAINT "ProgramSkill_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProgramSkill" ADD CONSTRAINT "ProgramSkill_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
