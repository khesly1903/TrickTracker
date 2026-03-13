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
exports.ContactsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const contacts_service_1 = require("./contacts.service");
const create_contact_dto_1 = require("./dto/create-contact.dto");
const update_contact_dto_1 = require("./dto/update-contact.dto");
const swagger_1 = require("@nestjs/swagger");
let ContactsController = class ContactsController {
    contactsService;
    constructor(contactsService) {
        this.contactsService = contactsService;
    }
    async createContact(createContactDto) {
        return this.contactsService.create(createContactDto);
    }
    async findAll() {
        return this.contactsService.findAll();
    }
    async findOne(id) {
        return this.contactsService.findOne(id);
    }
    async update(id, updateContactDto) {
        return this.contactsService.update(id, updateContactDto);
    }
    async hardRemove(id) {
        return this.contactsService.hardRemove(id);
    }
    async remove(id) {
        return this.contactsService.remove(id);
    }
};
exports.ContactsController = ContactsController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create a new contact profile' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The contact has been successfully created.',
    }),
    (0, swagger_1.ApiConflictResponse)({
        description: 'User ID not found or contact profile already exists.',
    }),
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_contact_dto_1.CreateContactDto]),
    __metadata("design:returntype", Promise)
], ContactsController.prototype, "createContact", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve all contacts' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Return a list of all contacts.',
    }),
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [Object] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ContactsController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get contact by ID or User ID' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Return the contact record.',
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: 'Contact not found.',
    }),
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ContactsController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update a contact record' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'The contact has been successfully updated.',
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: 'Contact not found.',
    }),
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_contact_dto_1.UpdateContactDto]),
    __metadata("design:returntype", Promise)
], ContactsController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Permanently delete a contact' }),
    (0, swagger_1.ApiNoContentResponse)({
        description: 'Contact deleted successfully.',
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: 'Contact not found.',
    }),
    (0, common_1.Delete)('hard/:id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ContactsController.prototype, "hardRemove", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Soft-delete a contact' }),
    (0, swagger_1.ApiNoContentResponse)({
        description: 'Contact soft deleted successfully.',
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: 'Contact not found.',
    }),
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ContactsController.prototype, "remove", null);
exports.ContactsController = ContactsController = __decorate([
    (0, swagger_1.ApiTags)('contacts'),
    (0, common_1.Controller)('contacts'),
    __metadata("design:paramtypes", [contacts_service_1.ContactsService])
], ContactsController);
//# sourceMappingURL=contacts.controller.js.map