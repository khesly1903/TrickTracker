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
exports.StudentsService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
let StudentsService = class StudentsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.student.findMany({
            where: {
                isActive: true,
            },
            include: {
                studentContacts: true,
                studentPrograms: true,
                studentSkills: true,
            },
        });
    }
    async filter(filterDto) {
        const { fullname } = filterDto;
        const where = {
            isActive: true,
        };
        if (fullname) {
            where.OR = [
                { name: { contains: fullname, mode: 'insensitive' } },
                { surname: { contains: fullname, mode: 'insensitive' } },
            ];
        }
        return this.prisma.student.findMany({
            where,
            select: {
                id: true,
                name: true,
                surname: true,
            },
        });
    }
    async findOne(id) {
        const student = await this.prisma.student.findFirst({
            where: {
                OR: [{ id: id }, { userId: id }],
            },
            include: {
                studentContacts: true,
                studentPrograms: true,
                studentSkills: true,
            },
        });
        if (!student) {
            throw new common_1.NotFoundException('Student not found.');
        }
        return student;
    }
    async addContactToStudent(studentId, contactId) {
        const studentExists = await this.findOne(studentId);
        const contactExists = await this.prisma.contact.findFirst({
            where: {
                OR: [{ id: contactId }, { userId: contactId }],
            },
        });
        if (!contactExists) {
            throw new common_1.NotFoundException('Contact not found.');
        }
        return this.prisma.studentContact.create({
            data: {
                studentId: studentExists.id,
                contactId: contactExists.id,
            },
        });
    }
    async update(id, updateStudentDto) {
        const studentExists = await this.findOne(id);
        return this.prisma.student.update({
            where: {
                id: studentExists.id,
            },
            data: {
                name: updateStudentDto.name,
                surname: updateStudentDto.surname,
                type: updateStudentDto.type,
                dob: updateStudentDto.dob ? new Date(updateStudentDto.dob) : undefined,
                injuries: updateStudentDto.injuries
                    ? { push: updateStudentDto.injuries }
                    : undefined,
                phoneNumber: updateStudentDto.phoneNumber,
                secondaryPhoneNumber: updateStudentDto.secondaryPhoneNumber,
                whatsappPhoneNumber: updateStudentDto.whatsappPhoneNumber,
                school: updateStudentDto.school,
                userId: updateStudentDto.userId,
            },
        });
    }
    async remove(id) {
        const studentExists = await this.findOne(id);
        if (!studentExists) {
            throw new common_1.NotFoundException('Student not found.');
        }
        return this.prisma.student.update({
            where: {
                id: studentExists.id,
            },
            data: {
                isActive: false,
            },
        });
    }
    async hardRemove(id) {
        const studentExists = await this.findOne(id);
        if (!studentExists) {
            throw new common_1.NotFoundException('Student not found.');
        }
        return this.prisma.student.delete({
            where: {
                id: studentExists.id,
            },
        });
    }
    async create(createStudentDto) {
        const existingUser = await this.prisma.user.findUnique({
            where: { id: createStudentDto.userId },
        });
        if (!existingUser) {
            throw new common_1.ConflictException('A user with this ID does not exist in the system.');
        }
        const existingStudent = await this.prisma.student.findUnique({
            where: { userId: createStudentDto.userId },
        });
        if (existingStudent) {
            throw new common_1.ConflictException('This user already has a student profile.');
        }
        const newStudentProfile = await this.prisma.student.create({
            data: {
                userId: createStudentDto.userId,
                name: createStudentDto.name,
                surname: createStudentDto.surname,
                type: createStudentDto.type,
                dob: new Date(createStudentDto.dob),
                injuries: createStudentDto.injuries || [],
                phoneNumber: createStudentDto.phoneNumber,
                secondaryPhoneNumber: createStudentDto.secondaryPhoneNumber,
                whatsappPhoneNumber: createStudentDto.whatsappPhoneNumber,
                school: createStudentDto.school,
            },
        });
        return newStudentProfile;
    }
};
exports.StudentsService = StudentsService;
exports.StudentsService = StudentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], StudentsService);
//# sourceMappingURL=students.service.js.map