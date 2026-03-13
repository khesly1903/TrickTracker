import { DatabaseService } from '../database/database.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
export declare class ContactsService {
    private readonly prisma;
    constructor(prisma: DatabaseService);
    create(createContactDto: CreateContactDto): Promise<{
        type: import("@prisma/client").$Enums.ContactTypes;
        email: string | null;
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        userId: string | null;
        surname: string;
        phoneNumber: string;
        secondaryPhoneNumber: string | null;
        whatsappPhoneNumber: string;
    }>;
    findAll(): Promise<({
        user: {
            email: string;
            roles: import("@prisma/client").$Enums.Role[];
            id: string;
            passwordHash: string;
            isActive: boolean;
            lastLoginAt: Date | null;
            refreshToken: string | null;
            createdAt: Date;
            updatedAt: Date;
        } | null;
        studentContacts: {
            studentId: string;
            contactId: string;
        }[];
    } & {
        type: import("@prisma/client").$Enums.ContactTypes;
        email: string | null;
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        userId: string | null;
        surname: string;
        phoneNumber: string;
        secondaryPhoneNumber: string | null;
        whatsappPhoneNumber: string;
    })[]>;
    findOne(id: string): Promise<{
        user: {
            email: string;
            roles: import("@prisma/client").$Enums.Role[];
            id: string;
            passwordHash: string;
            isActive: boolean;
            lastLoginAt: Date | null;
            refreshToken: string | null;
            createdAt: Date;
            updatedAt: Date;
        } | null;
        studentContacts: {
            studentId: string;
            contactId: string;
        }[];
    } & {
        type: import("@prisma/client").$Enums.ContactTypes;
        email: string | null;
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        userId: string | null;
        surname: string;
        phoneNumber: string;
        secondaryPhoneNumber: string | null;
        whatsappPhoneNumber: string;
    }>;
    update(id: string, updateContactDto: UpdateContactDto): Promise<{
        type: import("@prisma/client").$Enums.ContactTypes;
        email: string | null;
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        userId: string | null;
        surname: string;
        phoneNumber: string;
        secondaryPhoneNumber: string | null;
        whatsappPhoneNumber: string;
    }>;
    remove(id: string): Promise<{
        type: import("@prisma/client").$Enums.ContactTypes;
        email: string | null;
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        userId: string | null;
        surname: string;
        phoneNumber: string;
        secondaryPhoneNumber: string | null;
        whatsappPhoneNumber: string;
    }>;
    hardRemove(id: string): Promise<{
        type: import("@prisma/client").$Enums.ContactTypes;
        email: string | null;
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        userId: string | null;
        surname: string;
        phoneNumber: string;
        secondaryPhoneNumber: string | null;
        whatsappPhoneNumber: string;
    }>;
}
