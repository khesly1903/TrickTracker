import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  Query,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { StudentProgramsService } from './student-programs.service';
import { CreateStudentProgramDto } from './dto/create-student-program.dto';
import {
  ApiTags,
  ApiOperation,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiConflictResponse,
  ApiNoContentResponse,
  ApiQuery,
} from '@nestjs/swagger';
import { Public } from '../auth/decorators/public.decorator';

@ApiTags('student-programs')
@Public()
@Controller('student-programs')
export class StudentProgramsController {
  constructor(
    private readonly studentProgramsService: StudentProgramsService,
  ) {}

  @ApiOperation({
    summary: 'Enroll a student in a program (auto-populates skills)',
  })
  @ApiCreatedResponse({ description: 'Student enrolled successfully.' })
  @ApiNotFoundResponse({ description: 'Program location not found.' })
  @ApiConflictResponse({
    description: 'Student already enrolled, or program location at full capacity.',
  })
  @Post()
  async enroll(@Body() createDto: CreateStudentProgramDto) {
    return this.studentProgramsService.enroll(createDto);
  }

  @ApiOperation({
    summary: 'List enrollments (filter by studentId or programId)',
  })
  @ApiOkResponse({ description: 'Returns a list of enrollments.' })
  @ApiQuery({
    name: 'studentId',
    required: false,
    type: String,
    description: 'Filter by student',
  })
  @ApiQuery({
    name: 'programId',
    required: false,
    type: String,
    description: 'Filter by program',
  })
  @Get()
  async findAll(
    @Query('studentId') studentId?: string,
    @Query('programId') programId?: string,
  ) {
    return this.studentProgramsService.findAll(studentId, programId);
  }

  @ApiOperation({ summary: 'Get enrollment details with skills' })
  @ApiOkResponse({ description: 'Returns enrollment details.' })
  @ApiNotFoundResponse({ description: 'Enrollment not found.' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.studentProgramsService.findOne(id);
  }

  @ApiOperation({ summary: 'Soft-delete an enrollment (deactivate)' })
  @ApiOkResponse({ description: 'Enrollment deactivated.' })
  @ApiNotFoundResponse({ description: 'Enrollment not found.' })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.studentProgramsService.remove(id);
  }

  @ApiOperation({
    summary:
      'Hard-delete an enrollment (permanent, cascades skills & attendance)',
  })
  @ApiNoContentResponse({ description: 'Enrollment permanently deleted.' })
  @ApiNotFoundResponse({ description: 'Enrollment not found.' })
  @Delete('hard/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async hardRemove(@Param('id') id: string) {
    return this.studentProgramsService.hardRemove(id);
  }
}
