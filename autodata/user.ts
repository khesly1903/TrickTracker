import { PrismaClient, Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('--- User Generation Started ---');
  const userIds: string[] = [];
  const saltRounds = 10;
  const password = 'Password123!';
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  for (let i = 1; i <= 15; i++) {
    const email = `testuser${Date.now()}_${i}@example.com`;

    // Assigning generic roles (could be adjusted)
    let roles: Role[] = [Role.VISITOR];
    if (i <= 5) roles = [Role.STUDENT];
    else if (i <= 10) roles = [Role.INSTRUCTOR];
    else roles = [Role.PARENT];

    const user = await prisma.user.create({
      data: {
        email,
        passwordHash: hashedPassword,
        roles,
      },
    });
    userIds.push(user.id);
    console.log(`User ${i} created: ${user.id} (${email})`);
  }

  console.log('\n--- Generation Completed ---');
  console.log('Copy these IDs for other scripts:');
  console.log(JSON.stringify(userIds));
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

//   npx ts-node autodata/user.ts

["f392a4d3-08b1-4524-b4bf-1999e1d6b945",
    "74836df1-f5c9-4474-b338-cf09a81d40c3",
    "88055297-cdf7-41d8-86ac-1b36bbda3263",
    "2ba4bfd1-f782-43c4-8280-a6b854b30439",
    "1cebb60f-e623-4277-b5ab-43f5c3214520",
    "2f69a243-e4ae-4da7-947b-e075cb3c381d",
    "e2aabd41-6428-4c0b-9246-6d124e87314e",
    "f291b4dd-3bc2-48aa-96e1-9833d3676500",
    "21e61427-c8c2-4641-840c-c173aabdf482",
    "b621b5eb-b294-48cd-aec4-8e51bd2c3ac6",
    "5e73773b-e5b8-422f-afcb-5dfcfa706544",
    "44a65dd7-f469-4aac-b1d5-b0d43674426d",
    "2c1ee01b-79c3-4422-b80d-decea1443470",
    "b9824773-ca18-4537-bda7-74eaf373d2b7",
    "b4f863b8-b47c-42c4-bce7-26460f46960c"]