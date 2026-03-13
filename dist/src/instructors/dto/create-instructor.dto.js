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
exports.CreateInstructorDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateInstructorDto {
    userId;
    name;
    surname;
    phoneNumber;
    whatsappPhoneNumber;
    secondaryPhoneNumber;
    static _OPENAPI_METADATA_FACTORY() {
        return { userId: { required: true, type: () => String }, name: { required: true, type: () => String }, surname: { required: true, type: () => String }, phoneNumber: { required: true, type: () => String }, whatsappPhoneNumber: { required: true, type: () => String }, secondaryPhoneNumber: { required: false, type: () => String } };
    }
}
exports.CreateInstructorDto = CreateInstructorDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The unique ID of the associated user',
        example: '29d7b3d1-0f41-4558-ae08-5bef4f45c054',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'User ID cannot be empty.' }),
    __metadata("design:type", String)
], CreateInstructorDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'First name of the instructor',
        example: 'Alexander',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Name field cannot be empty.' }),
    __metadata("design:type", String)
], CreateInstructorDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Surname of the instructor',
        example: 'Great',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Surname field cannot be empty.' }),
    __metadata("design:type", String)
], CreateInstructorDto.prototype, "surname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Primary phone number',
        example: '+20 120 574 45 45',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Phone number field cannot be empty.' }),
    __metadata("design:type", String)
], CreateInstructorDto.prototype, "phoneNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'WhatsApp-enabled phone number',
        example: '+20 120 574 45 45',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'WhatsApp number field cannot be empty.' }),
    __metadata("design:type", String)
], CreateInstructorDto.prototype, "whatsappPhoneNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Secondary contact number',
        example: '+20 120 574 45 46',
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateInstructorDto.prototype, "secondaryPhoneNumber", void 0);
//# sourceMappingURL=create-instructor.dto.js.map