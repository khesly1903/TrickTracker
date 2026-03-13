import { StudentType } from '@prisma/client';
export declare class CreateStudentDto {
    userId: string;
    name: string;
    surname: string;
    type: StudentType;
    dob: string;
    injuries?: string[];
    phoneNumber?: string;
    secondaryPhoneNumber?: string;
    whatsappPhoneNumber?: string;
    school?: string;
}
