import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseService } from './database.service';

// 1. Mock Prisma Client to prevent it from establishing a real DB Pool during testing.
// Also, keep other elements from the original pg module to avoid breaking adapter-pg's 'types' object.
jest.mock('pg', () => {
  const actualPg = jest.requireActual('pg');
  const mPool = {
    connect: jest.fn(),
    query: jest.fn(),
    end: jest.fn(),
  };
  return { ...actualPg, Pool: jest.fn(() => mPool) };
});

describe('DatabaseService', () => {
  let service: DatabaseService;

  beforeEach(async () => {
    // 2. Assign a mock database URL (to prevent throwing connection errors).
    process.env.DATABASE_URL = 'postgres://test:test@localhost:5432/testdb';

    const module: TestingModule = await Test.createTestingModule({
      providers: [DatabaseService],
    }).compile();

    service = module.get<DatabaseService>(DatabaseService);

    // 3. Disable Prisma's connect function to prevent connection attempts during test runs.
    jest.spyOn(service, '$connect').mockImplementation(async () => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should connect to the database when onModuleInit is called', async () => {
    await service.onModuleInit();

    expect(service.$connect).toHaveBeenCalledTimes(1);
  });
});
