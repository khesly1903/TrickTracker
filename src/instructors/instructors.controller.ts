import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  HttpCode,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { InstructorsService } from './instructors.service';
import { CreateInstructorDto } from './dto/create-instructor.dto';
import { UpdateInstructorDto } from './dto/update-instructor.dto';
import { FilterInstructorDto } from './dto/filter-instructor.dto';
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

@ApiTags('instructors')
@ApiBearerAuth()
@Controller('instructors')
export class InstructorsController {
  constructor(private readonly instructorsService: InstructorsService) {}

  @ApiOperation({ summary: 'Register a new instructor profile' })
  @ApiCreatedResponse({ description: 'Instructor successfully created.' })
  @ApiConflictResponse({ description: 'User ID not found or instructor profile already exists.' })
  @Post()
  async createInstructor(@Body() createInstructorDto: CreateInstructorDto, @CurrentUser() user: AuthUser) {
    return this.instructorsService.create(createInstructorDto, user.academyId!);
  }

  @ApiOperation({ summary: 'Filter instructors by name or surname' })
  @ApiOkResponse({ description: 'Return instructors matching the filter criteria.' })
  @Get('filter')
  async filter(@Query() filterDto: FilterInstructorDto, @CurrentUser() user: AuthUser) {
    return this.instructorsService.filter(filterDto, user.academyId!);
  }

  @ApiOperation({ summary: 'Retrieve all active instructors with pagination' })
  @ApiOkResponse({ description: 'Return a paginated list of all active instructors.' })
  @Get()
  async findAll(@Query() paginationQuery: PaginationQueryDto, @CurrentUser() user: AuthUser) {
    return this.instructorsService.findAll(paginationQuery, user.academyId!);
  }

  @ApiOperation({ summary: 'Get instructor by ID or User ID' })
  @ApiOkResponse({ description: 'Return the instructor record.' })
  @ApiNotFoundResponse({ description: 'Instructor not found.' })
  @Get(':id')
  async findOne(@Param('id') id: string, @CurrentUser() user: AuthUser) {
    return this.instructorsService.findOne(id, user.academyId!);
  }

  @ApiOperation({ summary: 'Update an instructor profile' })
  @ApiOkResponse({ description: 'Instructor successfully updated.' })
  @ApiNotFoundResponse({ description: 'Instructor not found.' })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateInstructorDto: UpdateInstructorDto,
    @CurrentUser() user: AuthUser,
  ) {
    return this.instructorsService.update(id, updateInstructorDto, user.academyId!);
  }

  @ApiOperation({ summary: 'Permanently delete an instructor' })
  @ApiNoContentResponse({ description: 'Instructor permanently deleted.' })
  @ApiNotFoundResponse({ description: 'Instructor not found.' })
  @Delete('hard/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async hardRemove(@Param('id') id: string, @CurrentUser() user: AuthUser) {
    return this.instructorsService.hardRemove(id, user.academyId!);
  }

  @ApiOperation({ summary: 'Soft-delete an instructor' })
  @ApiNoContentResponse({ description: 'Instructor soft-deleted (isActive set to false).' })
  @ApiNotFoundResponse({ description: 'Instructor not found.' })
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string, @CurrentUser() user: AuthUser) {
    return this.instructorsService.remove(id, user.academyId!);
  }
}
