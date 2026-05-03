import { BadRequestException, Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';

@Injectable()
export class EnrollmentIdService {
  constructor(private readonly prisma: DatabaseService) {}

  async generate(
    txPrisma: any,
    academyId: string,
    academySeqNumber: number,
    customSequence?: string,
  ): Promise<string> {
    const year = new Date().getFullYear();
    const yy = String(year).slice(-2);
    const aaa = String(academySeqNumber).padStart(3, '0');

    if (customSequence) {
      if (!/^\d{1,4}$/.test(customSequence)) {
        throw new BadRequestException('Custom enrollment ID must be 1-4 digits.');
      }
      const nnnn = customSequence.padStart(4, '0');
      return `${yy}${aaa}${nnnn}`;
    }

    await txPrisma.$executeRaw`
      INSERT INTO "AcademyEnrollmentCounter" ("academyId", "year", "lastSeq")
      VALUES (${academyId}, ${year}, 0)
      ON CONFLICT ("academyId", "year") DO NOTHING
    `;

    const [counter] = await txPrisma.$queryRaw<{ lastSeq: number }[]>`
      SELECT "lastSeq" FROM "AcademyEnrollmentCounter"
      WHERE "academyId" = ${academyId} AND "year" = ${year}
      FOR UPDATE
    `;

    const newSeq = counter.lastSeq + 1;
    if (newSeq > 9999) {
      throw new BadRequestException('Academy enrollment limit (9999) reached for this year.');
    }

    await txPrisma.$executeRaw`
      UPDATE "AcademyEnrollmentCounter"
      SET "lastSeq" = ${newSeq}
      WHERE "academyId" = ${academyId} AND "year" = ${year}
    `;

    const nnnn = String(newSeq).padStart(4, '0');
    return `${yy}${aaa}${nnnn}`;
  }
}
