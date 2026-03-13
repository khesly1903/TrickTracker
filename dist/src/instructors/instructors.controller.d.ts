import { InstructorsService } from './instructors.service';
import { CreateInstructorDto } from './dto/create-instructor.dto';
import { UpdateInstructorDto } from './dto/update-instructor.dto';
export declare class InstructorsController {
    private readonly instructorsService;
    constructor(instructorsService: InstructorsService);
    createInstructor(createInstructorDto: CreateInstructorDto): Promise<{
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
    findAll(): Promise<{
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
    }[]>;
    findOne(id: string): Promise<{
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
    update(id: string, updateInstructorDto: UpdateInstructorDto): Promise<{
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
