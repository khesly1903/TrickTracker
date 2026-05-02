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
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { FilterStudentDto } from './dto/filter-student.dto';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import { ContactTypes } from '@prisma/client';
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

@ApiTags('students')
@ApiBearerAuth()
@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @ApiOperation({ summary: 'Create a new student profile' })
  @ApiCreatedResponse({ description: 'The student has been successfully created.' })
  @ApiConflictResponse({ description: 'A student profile already exists for this user ID.' })
  @Post()
  createStudent(@Body() createStudentDto: CreateStudentDto, @CurrentUser() user: AuthUser) {
    return this.studentsService.create(createStudentDto, user.academyId!);
  }

  @ApiOperation({ summary: 'Filter students by name' })
  @ApiOkResponse({ description: 'Return students matching the filter criteria.' })
  @Get('filter')
  filter(@Query() filterDto: FilterStudentDto, @CurrentUser() user: AuthUser) {
    return this.studentsService.filter(filterDto, user.academyId!);
  }

  @ApiOperation({ summary: 'Retrieve all students with pagination' })
  @ApiOkResponse({ description: 'Return a paginated list of all active students.' })
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto, @CurrentUser() user: AuthUser) {
    return this.studentsService.findAll(paginationQuery, user.academyId!);
  }

  @ApiOperation({ summary: 'Get student records by ID or User ID' })
  @ApiOkResponse({ description: 'Return the student record.' })
  @ApiNotFoundResponse({ description: 'Student not found.' })
  @Get(':id')
  findOne(@Param('id') id: string, @CurrentUser() user: AuthUser) {
    return this.studentsService.findOne(id, user.academyId!);
  }

  @ApiOperation({ summary: 'Update a student profile' })
  @ApiOkResponse({ description: 'The student profile has been successfully updated.' })
  @ApiNotFoundResponse({ description: 'Student not found.' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto, @CurrentUser() user: AuthUser) {
    return this.studentsService.update(id, updateStudentDto, user.academyId!);
  }

  @ApiOperation({ summary: 'Permanently delete a student' })
  @ApiNoContentResponse({ description: 'Student deleted successfully' })
  @ApiNotFoundResponse({ description: 'Student not found' })
  @Delete('hard/:id')
  hardRemove(@Param('id') id: string, @CurrentUser() user: AuthUser) {
    return this.studentsService.hardRemove(id, user.academyId!);
  }

  @ApiOperation({ summary: 'Soft-delete a student' })
  @ApiNoContentResponse({ description: 'Student soft deleted successfully' })
  @ApiNotFoundResponse({ description: 'Student not found' })
  @Delete(':id')
  remove(@Param('id') id: string, @CurrentUser() user: AuthUser) {
    return this.studentsService.remove(id, user.academyId!);
  }

  @ApiOperation({ summary: 'Assign a contact to a student with relation' })
  @ApiCreatedResponse({ description: 'Contact assigned successfully.' })
  @ApiNotFoundResponse({ description: 'Student or Contact not found.' })
  @Post(':studentId/contact/:contactId')
  addContact(
    @Param('studentId') studentId: string,
    @Param('contactId') contactId: string,
    @Body('relation') relation: ContactTypes,
    @CurrentUser() user: AuthUser,
  ) {
    return this.studentsService.addContactToStudent(studentId, contactId, user.academyId!, relation);
  }
}
