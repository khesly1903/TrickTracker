import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

// PASTE 5 IDs HERE FROM user.ts
const USER_IDS: string[] = [
  '2f69a243-e4ae-4da7-947b-e075cb3c381d',
  'e2aabd41-6428-4c0b-9246-6d124e87314e',
  'f291b4dd-3bc2-48aa-96e1-9833d3676500',
  '21e61427-c8c2-4641-840c-c173aabdf482',
  'b621b5eb-b294-48cd-aec4-8e51bd2c3ac6',
];

async function main() {
  if (USER_IDS.length === 0) {
    console.error('Please provide USER_IDS in the script.');
    return;
  }

  console.log('--- Instructor Generation Started ---');

  for (let i = 0; i < USER_IDS.length; i++) {
    const instructor = await prisma.instructor.create({
      data: {
        userId: USER_IDS[i],
        name: `InstructorName_${i + 1}`,
        surname: `InstructorSurname_${i + 1}`,
        phoneNumber: `+90555000000${i}`,
        whatsappPhoneNumber: `+90555000000${i}`,
        isActive: true,
      },
    });
    console.log(
      `Instructor profile created for User ${USER_IDS[i]}: ${instructor.id}`,
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
