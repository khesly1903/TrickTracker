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
} from '@nestjs/common';
import { InstructorsService } from './instructors.service';
import { CreateInstructorDto } from './dto/create-instructor.dto';
import { UpdateInstructorDto } from './dto/update-instructor.dto';
import {
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('instructors')
@Controller('instructors')
export class InstructorsController {
  constructor(private readonly instructorsService: InstructorsService) {}

  @ApiOperation({ summary: 'Register a new instructor profile' })
  @ApiCreatedResponse({
    description: 'Instructor successfully created.',
  })
  @ApiConflictResponse({
    description: 'User ID not found or instructor profile already exists.',
  })
  @Post()
  async createInstructor(@Body() createInstructorDto: CreateInstructorDto) {
    return this.instructorsService.create(createInstructorDto);
  }

  @ApiOperation({ summary: 'Retrieve all active instructors' })
  @ApiOkResponse({
    description: 'Return a list of all active instructors.',
  })
  @Get()
  async findAll() {
    return this.instructorsService.findAll();
  }

  @ApiOperation({ summary: 'Get instructor by ID or User ID' })
  @ApiOkResponse({
    description: 'Return the instructor record.',
  })
  @ApiNotFoundResponse({
    description: 'Instructor not found.',
  })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.instructorsService.findOne(id);
  }

  @ApiOperation({ summary: 'Update an instructor profile' })
  @ApiOkResponse({
    description: 'Instructor successfully updated.',
  })
  @ApiNotFoundResponse({
    description: 'Instructor not found.',
  })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateInstructorDto: UpdateInstructorDto,
  ) {
    return this.instructorsService.update(id, updateInstructorDto);
  }

  @ApiOperation({ summary: 'Permanently delete an instructor' })
  @ApiNoContentResponse({
    description: 'Instructor permanently deleted.',
  })
  @ApiNotFoundResponse({
    description: 'Instructor not found.',
  })
  @Delete('hard/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async hardRemove(@Param('id') id: string) {
    return this.instructorsService.hardRemove(id);
  }

  @ApiOperation({ summary: 'Soft-delete an instructor' })
  @ApiNoContentResponse({
    description: 'Instructor soft-deleted (isActive set to false).',
  })
  @ApiNotFoundResponse({
    description: 'Instructor not found.',
  })
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string) {
    return this.instructorsService.remove(id);
  }
}
