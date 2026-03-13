import { PrismaClient, ContactTypes } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

// PASTE 5 IDs HERE FROM user.ts
const USER_IDS: string[] = [
  '5e73773b-e5b8-422f-afcb-5dfcfa706544',
  '44a65dd7-f469-4aac-b1d5-b0d43674426d',
  '2c1ee01b-79c3-4422-b80d-decea1443470',
  'b9824773-ca18-4537-bda7-74eaf373d2b7',
  'b4f863b8-b47c-42c4-bce7-26460f46960c',
];

async function main() {
  if (USER_IDS.length === 0) {
    console.error('Please provide USER_IDS in the script.');
    return;
  }

  console.log('--- Contact Generation Started ---');

  for (let i = 0; i < USER_IDS.length; i++) {
    const contact = await prisma.contact.create({
      data: {
        userId: USER_IDS[i],
        name: `ContactName_${i + 1}`,
        surname: `ContactSurname_${i + 1}`,
        type: ContactTypes.PARENT,
        phoneNumber: `+90555111111${i}`,
        whatsappPhoneNumber: `+90555111111${i}`,
        email: `contact${Date.now()}_${i}@example.com`,
        isActive: true,
      },
    });
    console.log(
      `Contact profile created for User ${USER_IDS[i]}: ${contact.id}`,
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
