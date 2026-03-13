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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstructorsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const instructors_service_1 = require("./instructors.service");
const create_instructor_dto_1 = require("./dto/create-instructor.dto");
const update_instructor_dto_1 = require("./dto/update-instructor.dto");
const swagger_1 = require("@nestjs/swagger");
let InstructorsController = class InstructorsController {
    instructorsService;
    constructor(instructorsService) {
        this.instructorsService = instructorsService;
    }
    async createInstructor(createInstructorDto) {
        return this.instructorsService.create(createInstructorDto);
    }
    async findAll() {
        return this.instructorsService.findAll();
    }
    async findOne(id) {
        return this.instructorsService.findOne(id);
    }
    async update(id, updateInstructorDto) {
        return this.instructorsService.update(id, updateInstructorDto);
    }
    async hardRemove(id) {
        return this.instructorsService.hardRemove(id);
    }
    async remove(id) {
        return this.instructorsService.remove(id);
    }
};
exports.InstructorsController = InstructorsController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Register a new instructor profile' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'Instructor successfully created.',
    }),
    (0, swagger_1.ApiConflictResponse)({
        description: 'User ID not found or instructor profile already exists.',
    }),
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_instructor_dto_1.CreateInstructorDto]),
    __metadata("design:returntype", Promise)
], InstructorsController.prototype, "createInstructor", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve all active instructors' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Return a list of all active instructors.',
    }),
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], InstructorsController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get instructor by ID or User ID' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Return the instructor record.',
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: 'Instructor not found.',
    }),
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InstructorsController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update an instructor profile' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Instructor successfully updated.',
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: 'Instructor not found.',
    }),
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_instructor_dto_1.UpdateInstructorDto]),
    __metadata("design:returntype", Promise)
], InstructorsController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Permanently delete an instructor' }),
    (0, swagger_1.ApiNoContentResponse)({
        description: 'Instructor permanently deleted.',
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: 'Instructor not found.',
    }),
    (0, common_1.Delete)('hard/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    openapi.ApiResponse({ status: common_1.HttpStatus.NO_CONTENT }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InstructorsController.prototype, "hardRemove", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Soft-delete an instructor' }),
    (0, swagger_1.ApiNoContentResponse)({
        description: 'Instructor soft-deleted (isActive set to false).',
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: 'Instructor not found.',
    }),
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    openapi.ApiResponse({ status: common_1.HttpStatus.NO_CONTENT }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InstructorsController.prototype, "remove", null);
exports.InstructorsController = InstructorsController = __decorate([
    (0, swagger_1.ApiTags)('instructors'),
    (0, common_1.Controller)('instructors'),
    __metadata("design:paramtypes", [instructors_service_1.InstructorsService])
], InstructorsController);
//# sourceMappingURL=instructors.controller.js.map