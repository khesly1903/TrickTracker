import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import {
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('contacts')
@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @ApiOperation({ summary: 'Create a new contact profile' })
  @ApiCreatedResponse({
    description: 'The contact has been successfully created.',
  })
  @ApiConflictResponse({
    description: 'User ID not found or contact profile already exists.',
  })
  @Post()
  async createContact(@Body() createContactDto: CreateContactDto) {
    return this.contactsService.create(createContactDto);
  }

  @ApiOperation({ summary: 'Retrieve all contacts' })
  @ApiOkResponse({
    description: 'Return a list of all contacts.',
  })
  @Get()
  async findAll() {
    return this.contactsService.findAll();
  }

  @ApiOperation({ summary: 'Get contact by ID or User ID' })
  @ApiOkResponse({
    description: 'Return the contact record.',
  })
  @ApiNotFoundResponse({
    description: 'Contact not found.',
  })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.contactsService.findOne(id);
  }

  @ApiOperation({ summary: 'Update a contact record' })
  @ApiOkResponse({
    description: 'The contact has been successfully updated.',
  })
  @ApiNotFoundResponse({
    description: 'Contact not found.',
  })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateContactDto: UpdateContactDto,
  ) {
    return this.contactsService.update(id, updateContactDto);
  }

  @ApiOperation({ summary: 'Permanently delete a contact' })
  @ApiNoContentResponse({
    description: 'Contact deleted successfully.',
  })
  @ApiNotFoundResponse({
    description: 'Contact not found.',
  })
  @Delete('hard/:id')
  async hardRemove(@Param('id') id: string) {
    return this.contactsService.hardRemove(id);
  }

  @ApiOperation({ summary: 'Soft-delete a contact' })
  @ApiNoContentResponse({
    description: 'Contact soft deleted successfully.',
  })
  @ApiNotFoundResponse({
    description: 'Contact not found.',
  })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.contactsService.remove(id);
  }
}
