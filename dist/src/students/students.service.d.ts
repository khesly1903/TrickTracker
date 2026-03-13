import { DatabaseService } from '../database/database.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { FilterStudentDto } from './dto/filter-student.dto';
export declare class StudentsService {
    private readonly prisma;
    constructor(prisma: DatabaseService);
    findAll(): Promise<({
        studentContacts: {
            studentId: string;
            contactId: string;
        }[];
        studentPrograms: {
            id: string;
            isActive: boolean;
            studentId: string;
            programId: string;
        }[];
        studentSkills: {
            status: import("@prisma/client").$Enums.SkillStatus;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            studentId: string;
            skillId: string;
            achievedAt: Date | null;
        }[];
    } & {
        type: import("@prisma/client").$Enums.StudentType;
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        userId: string | null;
        surname: string;
        dob: Date;
        injuries: string[];
        phoneNumber: string | null;
        secondaryPhoneNumber: string | null;
        whatsappPhoneNumber: string | null;
        school: string | null;
    })[]>;
    filter(filterDto: FilterStudentDto): Promise<{
        id: string;
        name: string;
        surname: string;
    }[]>;
    findOne(id: string): Promise<{
        studentContacts: {
            studentId: string;
            contactId: string;
        }[];
        studentPrograms: {
            id: string;
            isActive: boolean;
            studentId: string;
            programId: string;
        }[];
        studentSkills: {
            status: import("@prisma/client").$Enums.SkillStatus;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            studentId: string;
            skillId: string;
            achievedAt: Date | null;
        }[];
    } & {
        type: import("@prisma/client").$Enums.StudentType;
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        userId: string | null;
        surname: string;
        dob: Date;
        injuries: string[];
        phoneNumber: string | null;
        secondaryPhoneNumber: string | null;
        whatsappPhoneNumber: string | null;
        school: string | null;
    }>;
    addContactToStudent(studentId: string, contactId: string): Promise<{
        studentId: string;
        contactId: string;
    }>;
    update(id: string, updateStudentDto: UpdateStudentDto): Promise<{
        type: import("@prisma/client").$Enums.StudentType;
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        userId: string | null;
        surname: string;
        dob: Date;
        injuries: string[];
        phoneNumber: string | null;
        secondaryPhoneNumber: string | null;
        whatsappPhoneNumber: string | null;
        school: string | null;
    }>;
    remove(id: string): Promise<{
        type: import("@prisma/client").$Enums.StudentType;
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        userId: string | null;
        surname: string;
        dob: Date;
        injuries: string[];
        phoneNumber: string | null;
        secondaryPhoneNumber: string | null;
        whatsappPhoneNumber: string | null;
        school: string | null;
    }>;
    hardRemove(id: string): Promise<{
        type: import("@prisma/client").$Enums.StudentType;
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        userId: string | null;
        surname: string;
        dob: Date;
        injuries: string[];
        phoneNumber: string | null;
        secondaryPhoneNumber: string | null;
        whatsappPhoneNumber: string | null;
        school: string | null;
    }>;
    create(createStudentDto: CreateStudentDto): Promise<{
        type: import("@prisma/client").$Enums.StudentType;
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        userId: string | null;
        surname: string;
        dob: Date;
        injuries: string[];
        phoneNumber: string | null;
        secondaryPhoneNumber: string | null;
        whatsappPhoneNumber: string | null;
        school: string | null;
    }>;
}
