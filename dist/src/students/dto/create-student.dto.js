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
exports.CreateStudentDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const client_1 = require("@prisma/client");
const swagger_1 = require("@nestjs/swagger");
class CreateStudentDto {
    userId;
    name;
    surname;
    type;
    dob;
    injuries;
    phoneNumber;
    secondaryPhoneNumber;
    whatsappPhoneNumber;
    school;
    static _OPENAPI_METADATA_FACTORY() {
        return { userId: { required: true, type: () => String }, name: { required: true, type: () => String }, surname: { required: true, type: () => String }, type: { required: true, type: () => Object }, dob: { required: true, type: () => String }, injuries: { required: false, type: () => [String] }, phoneNumber: { required: false, type: () => String }, secondaryPhoneNumber: { required: false, type: () => String }, whatsappPhoneNumber: { required: false, type: () => String }, school: { required: false, type: () => String } };
    }
}
exports.CreateStudentDto = CreateStudentDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'It connects user and student',
        example: '29d7b3d1-0f41-4558-ae08-5bef4f45c054',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'User ID cannot be empty.' }),
    __metadata("design:type", String)
], CreateStudentDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Julia',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Name field cannot be empty.' }),
    __metadata("design:type", String)
], CreateStudentDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Alexan',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Surname field cannot be empty.' }),
    __metadata("design:type", String)
], CreateStudentDto.prototype, "surname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'CHILD',
    }),
    (0, class_validator_1.IsEnum)(client_1.StudentType, { message: 'Invalid Student Type selected.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Student Type (CHILD/ADULT) is required.' }),
    __metadata("design:type", String)
], CreateStudentDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2001-04-05',
    }),
    (0, class_validator_1.IsDateString)({}, { message: 'Date of birth must be a valid ISO date string (YYYY-MM-DD).' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Date of birth is required.' }),
    __metadata("design:type", String)
], CreateStudentDto.prototype, "dob", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'It is an optional array of injuries',
        example: ['Broken left arm', 'Rıght leg tendon rupture'],
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateStudentDto.prototype, "injuries", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '+20 120 574 45 45',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateStudentDto.prototype, "phoneNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '+20 120 574 45 45',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateStudentDto.prototype, "secondaryPhoneNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '+20 120 574 45 45',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateStudentDto.prototype, "whatsappPhoneNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Cairo University',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateStudentDto.prototype, "school", void 0);
//# sourceMappingURL=create-student.dto.js.map