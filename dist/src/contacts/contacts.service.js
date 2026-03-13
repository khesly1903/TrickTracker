"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactsService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
let ContactsService = class ContactsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createContactDto) {
        const existingUser = await this.prisma.user.findUnique({
            where: { id: createContactDto.userId },
        });
        if (!existingUser) {
            throw new common_1.ConflictException('A user with this ID does not exist in the system.');
        }
        const existingContact = await this.prisma.contact.findUnique({
            where: { userId: createContactDto.userId },
        });
        if (existingContact) {
            throw new common_1.ConflictException('This user already has a contact profile.');
        }
        const newContactProfile = await this.prisma.contact.create({
            data: {
                userId: createContactDto.userId,
                name: createContactDto.name,
                surname: createContactDto.surname,
                type: createContactDto.type,
                phoneNumber: createContactDto.phoneNumber,
                secondaryPhoneNumber: createContactDto.secondaryPhoneNumber,
                whatsappPhoneNumber: createContactDto.whatsappPhoneNumber,
            },
        });
        return newContactProfile;
    }
    async findAll() {
        return this.prisma.contact.findMany({
            where: {
                isActive: true,
            },
            include: {
                user: true,
                studentContacts: true,
            },
        });
    }
    async findOne(id) {
        const contact = await this.prisma.contact.findFirst({
            where: {
                OR: [{ id }, { userId: id }],
            },
            include: {
                user: true,
                studentContacts: true,
            },
        });
        if (!contact) {
            throw new common_1.NotFoundException('Contact not found');
        }
        return contact;
    }
    async update(id, updateContactDto) {
        const existingContact = await this.findOne(id);
        return this.prisma.contact.update({
            where: { id: existingContact.id },
            data: {
                name: updateContactDto.name,
                surname: updateContactDto.surname,
                type: updateContactDto.type,
                phoneNumber: updateContactDto.phoneNumber,
                secondaryPhoneNumber: updateContactDto.secondaryPhoneNumber,
                whatsappPhoneNumber: updateContactDto.whatsappPhoneNumber,
                userId: updateContactDto.userId,
            },
        });
    }
    async remove(id) {
        const existingContact = await this.findOne(id);
        return this.prisma.contact.update({
            where: { id: existingContact.id },
            data: {
                isActive: false,
            },
        });
    }
    async hardRemove(id) {
        const existingContact = await this.findOne(id);
        return this.prisma.contact.delete({
            where: { id: existingContact.id },
        });
    }
};
exports.ContactsService = ContactsService;
exports.ContactsService = ContactsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], ContactsService);
//# sourceMappingURL=contacts.service.js.map