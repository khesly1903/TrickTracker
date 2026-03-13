import { ContactTypes } from '@prisma/client';
export declare class CreateContactDto {
    userId: string;
    name: string;
    surname: string;
    type: ContactTypes;
    phoneNumber: string;
    whatsappPhoneNumber: string;
    secondaryPhoneNumber?: string;
}
