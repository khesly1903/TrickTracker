import { DatabaseService } from '../database/database.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: DatabaseService);
    findOne(id: string): Promise<{
        email: string;
        roles: import("@prisma/client").$Enums.Role[];
        id: string;
        passwordHash: string;
        isActive: boolean;
        lastLoginAt: Date | null;
        refreshToken: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        email: string;
        roles: import("@prisma/client").$Enums.Role[];
        id: string;
        passwordHash: string;
        isActive: boolean;
        lastLoginAt: Date | null;
        refreshToken: string | null;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    create(createUserDto: CreateUserDto): Promise<{
        email: string;
        roles: import("@prisma/client").$Enums.Role[];
        id: string;
        isActive: boolean;
        lastLoginAt: Date | null;
        refreshToken: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
        email: string;
        roles: import("@prisma/client").$Enums.Role[];
        id: string;
        isActive: boolean;
        lastLoginAt: Date | null;
        refreshToken: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        email: string;
        roles: import("@prisma/client").$Enums.Role[];
        id: string;
        isActive: boolean;
        lastLoginAt: Date | null;
        refreshToken: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    hardRemove(id: string): Promise<{
        email: string;
        roles: import("@prisma/client").$Enums.Role[];
        id: string;
        isActive: boolean;
        lastLoginAt: Date | null;
        refreshToken: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
