import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { FilterContactDto } from './dto/filter-contact.dto';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import {
  ApiBearerAuth,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import type { AuthUser } from '../auth/strategies/jwt.strategy';

@ApiTags('contacts')
@ApiBearerAuth()
@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @ApiOperation({ summary: 'Create a new contact profile' })
  @ApiCreatedResponse({ description: 'The contact has been successfully created.' })
  @ApiConflictResponse({ description: 'User ID not found or contact profile already exists.' })
  @Post()
  async createContact(@Body() createContactDto: CreateContactDto, @CurrentUser() user: AuthUser) {
    return this.contactsService.create(createContactDto, user.academyId!);
  }

  @ApiOperation({ summary: 'Filter contacts by name' })
  @ApiOkResponse({ description: 'Return contacts matching the filter criteria.' })
  @Get('filter')
  async filter(@Query('fullname') fullname: string | undefined, @CurrentUser() user: AuthUser) {
    const filterDto = { fullname } as FilterContactDto;
    return this.contactsService.filter(filterDto, user.academyId!);
  }

  @ApiOperation({ summary: 'Retrieve all contacts with pagination' })
  @ApiOkResponse({ description: 'Return a paginated list of all active contacts.' })
  @Get()
  async findAll(@Query() paginationQuery: PaginationQueryDto, @CurrentUser() user: AuthUser) {
    return this.contactsService.findAll(paginationQuery, user.academyId!);
  }

  @ApiOperation({ summary: 'Get contact by ID or User ID' })
  @ApiOkResponse({ description: 'Return the contact record.' })
  @ApiNotFoundResponse({ description: 'Contact not found.' })
  @Get(':id')
  async findOne(@Param('id') id: string, @CurrentUser() user: AuthUser) {
    return this.contactsService.findOne(id, user.academyId!);
  }

  @ApiOperation({ summary: 'Update a contact record' })
  @ApiOkResponse({ description: 'The contact has been successfully updated.' })
  @ApiNotFoundResponse({ description: 'Contact not found.' })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateContactDto: UpdateContactDto,
    @CurrentUser() user: AuthUser,
  ) {
    return this.contactsService.update(id, updateContactDto, user.academyId!);
  }

  @ApiOperation({ summary: 'Permanently delete a contact' })
  @ApiNoContentResponse({ description: 'Contact deleted successfully.' })
  @ApiNotFoundResponse({ description: 'Contact not found.' })
  @Delete('hard/:id')
  async hardRemove(@Param('id') id: string, @CurrentUser() user: AuthUser) {
    return this.contactsService.hardRemove(id, user.academyId!);
  }

  @ApiOperation({ summary: 'Soft-delete a contact' })
  @ApiNoContentResponse({ description: 'Contact soft deleted successfully.' })
  @ApiNotFoundResponse({ description: 'Contact not found.' })
  @Delete(':id')
  async remove(@Param('id') id: string, @CurrentUser() user: AuthUser) {
    return this.contactsService.remove(id, user.academyId!);
  }
}
