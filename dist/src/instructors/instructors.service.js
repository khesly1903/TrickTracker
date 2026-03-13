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
exports.InstructorsService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
let InstructorsService = class InstructorsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createInstructorDto) {
        const existingUser = await this.prisma.user.findUnique({
            where: { id: createInstructorDto.userId },
        });
        if (!existingUser) {
            throw new common_1.ConflictException('A user with this ID does not exist in the system.');
        }
        const existingInstructor = await this.prisma.instructor.findUnique({
            where: { userId: createInstructorDto.userId },
        });
        if (existingInstructor) {
            throw new common_1.ConflictException('This user already has an instructor profile.');
        }
        const newInstructorProfile = await this.prisma.instructor.create({
            data: {
                userId: createInstructorDto.userId,
                name: createInstructorDto.name,
                surname: createInstructorDto.surname,
                phoneNumber: createInstructorDto.phoneNumber,
                whatsappPhoneNumber: createInstructorDto.whatsappPhoneNumber,
                secondaryPhoneNumber: createInstructorDto.secondaryPhoneNumber,
            },
        });
        return newInstructorProfile;
    }
    async findAll() {
        return this.prisma.instructor.findMany({
            where: {
                isActive: true,
            },
        });
    }
    async findOne(id) {
        const instructor = await this.prisma.instructor.findFirst({
            where: {
                OR: [{ id }, { userId: id }],
            },
        });
        if (!instructor) {
            throw new common_1.NotFoundException('Instructor not found.');
        }
        return instructor;
    }
    async update(id, updateInstructorDto) {
        const existingInstructor = await this.findOne(id);
        return this.prisma.instructor.update({
            where: { id: existingInstructor.id },
            data: {
                name: updateInstructorDto.name,
                surname: updateInstructorDto.surname,
                phoneNumber: updateInstructorDto.phoneNumber,
                whatsappPhoneNumber: updateInstructorDto.whatsappPhoneNumber,
                secondaryPhoneNumber: updateInstructorDto.secondaryPhoneNumber,
                userId: updateInstructorDto.userId,
            },
        });
    }
    async remove(id) {
        const existingInstructor = await this.findOne(id);
        return this.prisma.instructor.update({
            where: { id: existingInstructor.id },
            data: {
                isActive: false,
            },
        });
    }
    async hardRemove(id) {
        const existingInstructor = await this.findOne(id);
        return this.prisma.instructor.delete({
            where: { id: existingInstructor.id },
        });
    }
};
exports.InstructorsService = InstructorsService;
exports.InstructorsService = InstructorsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], InstructorsService);
//# sourceMappingURL=instructors.service.js.map