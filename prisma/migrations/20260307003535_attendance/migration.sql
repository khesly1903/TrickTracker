-- AlterTable
ALTER TABLE "Program" ADD COLUMN     "studentId" TEXT;

-- CreateTable
CREATE TABLE "Attendance" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "attended" BOOLEAN NOT NULL,
    "studentProgramStudentId" TEXT,
    "studentProgramProgramId" TEXT,

    CONSTRAINT "Attendance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudentProgram" (
    "studentId" TEXT NOT NULL,
    "programId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "StudentProgram_studentId_programId_key" ON "StudentProgram"("studentId", "programId");

-- AddForeignKey
ALTER TABLE "Attendance" ADD CONSTRAINT "Attendance_studentProgramStudentId_studentProgramProgramId_fkey" FOREIGN KEY ("studentProgramStudentId", "studentProgramProgramId") REFERENCES "StudentProgram"("studentId", "programId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentProgram" ADD CONSTRAINT "StudentProgram_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentProgram" ADD CONSTRAINT "StudentProgram_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
