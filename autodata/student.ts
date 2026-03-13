import { PrismaClient, StudentType } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

// PASTE 5 IDs HERE FROM user.ts
const USER_IDS: string[] = [
  'f392a4d3-08b1-4524-b4bf-1999e1d6b945',
  '74836df1-f5c9-4474-b338-cf09a81d40c3',
  '88055297-cdf7-41d8-86ac-1b36bbda3263',
  '2ba4bfd1-f782-43c4-8280-a6b854b30439',
  '1cebb60f-e623-4277-b5ab-43f5c3214520',
];

async function main() {
  if (USER_IDS.length === 0) {
    console.error('Please provide USER_IDS in the script.');
    return;
  }

  console.log('--- Student Generation Started ---');

  for (let i = 0; i < USER_IDS.length; i++) {
    const student = await prisma.student.create({
      data: {
        userId: USER_IDS[i],
        name: `StudentName_${i + 1}`,
        surname: `StudentSurname_${i + 1}`,
        type: i % 2 === 0 ? StudentType.CHILD : StudentType.ADULT,
        dob: new Date(2010 + i, 0, 1),
        isActive: true,
      },
    });
    console.log(
      `Student profile created for User ${USER_IDS[i]}: ${student.id}`,
    );
  }

  console.log('--- Completed ---');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
