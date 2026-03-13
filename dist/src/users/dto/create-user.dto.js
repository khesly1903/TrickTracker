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
exports.CreateUserDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const client_1 = require("@prisma/client");
const swagger_1 = require("@nestjs/swagger");
class CreateUserDto {
    email;
    password;
    roles;
    static _OPENAPI_METADATA_FACTORY() {
        return { email: { required: true, type: () => String, format: "email" }, password: { required: true, type: () => String, minLength: 8 }, roles: { required: true, type: () => [Object] } };
    }
}
exports.CreateUserDto = CreateUserDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The email address of the user',
        example: 'user@example.com',
    }),
    (0, class_validator_1.IsEmail)({}, { message: 'Please provide a valid email address.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Email field cannot be empty.' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Secure password (min 8 characters)',
        example: 'strongPassword123!',
        minLength: 8,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Password field cannot be empty.' }),
    (0, class_validator_1.MinLength)(8, { message: 'Password must be at least 8 characters long.' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Assigned roles for the user',
        enum: client_1.Role,
        isArray: true,
        example: [client_1.Role.STUDENT],
    }),
    (0, class_validator_1.IsEnum)(client_1.Role, { each: true, message: 'You have selected an invalid role.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Roles field cannot be empty.' }),
    __metadata("design:type", Array)
], CreateUserDto.prototype, "roles", void 0);
//# sourceMappingURL=create-user.dto.js.map