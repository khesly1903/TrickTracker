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
exports.StudentsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const students_service_1 = require("./students.service");
const create_student_dto_1 = require("./dto/create-student.dto");
const update_student_dto_1 = require("./dto/update-student.dto");
const filter_student_dto_1 = require("./dto/filter-student.dto");
const swagger_1 = require("@nestjs/swagger");
let StudentsController = class StudentsController {
    studentsService;
    constructor(studentsService) {
        this.studentsService = studentsService;
    }
    createStudent(createStudentDto) {
        return this.studentsService.create(createStudentDto);
    }
    filter(filterDto) {
        return this.studentsService.filter(filterDto);
    }
    findAll() {
        return this.studentsService.findAll();
    }
    findOne(id) {
        return this.studentsService.findOne(id);
    }
    update(id, updateStudentDto) {
        return this.studentsService.update(id, updateStudentDto);
    }
    hardRemove(id) {
        return this.studentsService.hardRemove(id);
    }
    remove(id) {
        return this.studentsService.remove(id);
    }
    addContact(studentId, contactId) {
        return this.studentsService.addContactToStudent(studentId, contactId);
    }
};
exports.StudentsController = StudentsController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create a new student profile' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The student has been successfully created.',
    }),
    (0, swagger_1.ApiConflictResponse)({
        description: 'A student profile already exists for this user ID.',
    }),
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_student_dto_1.CreateStudentDto]),
    __metadata("design:returntype", void 0)
], StudentsController.prototype, "createStudent", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Filter students by name' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Return students matching the filter criteria.',
    }),
    (0, common_1.Get)('filter'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_student_dto_1.FilterStudentDto]),
    __metadata("design:returntype", void 0)
], StudentsController.prototype, "filter", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve all students' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Return a list of all active students.',
    }),
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StudentsController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get student records by ID or User ID' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Return the student record.',
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: 'Student not found.',
    }),
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StudentsController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update a student profile' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'The student profile has been successfully updated.',
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: 'Student not found.',
    }),
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_student_dto_1.UpdateStudentDto]),
    __metadata("design:returntype", void 0)
], StudentsController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Permanently delete a student' }),
    (0, swagger_1.ApiNoContentResponse)({
        description: 'Student deleted successfully',
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: 'Student not found',
    }),
    (0, common_1.Delete)('hard/:id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StudentsController.prototype, "hardRemove", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Soft-delete a student' }),
    (0, swagger_1.ApiNoContentResponse)({
        description: 'Student soft deleted successfully',
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: 'Student not found',
    }),
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StudentsController.prototype, "remove", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Assign a contact to a student' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'Contact assigned successfully.',
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: 'Student or Contact not found.',
    }),
    (0, common_1.Post)(':studentId/contact/:contactId'),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Param)('studentId')),
    __param(1, (0, common_1.Param)('contactId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], StudentsController.prototype, "addContact", null);
exports.StudentsController = StudentsController = __decorate([
    (0, swagger_1.ApiTags)('students'),
    (0, common_1.Controller)('students'),
    __metadata("design:paramtypes", [students_service_1.StudentsService])
], StudentsController);
//# sourceMappingURL=students.controller.js.map