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
  ApiBearerAuth,
  ApiTags,
  ApiOperation,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiConflictResponse,
  ApiNoContentResponse,
  ApiQuery,
} from '@nestjs/swagger';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import type { AuthUser } from '../auth/strategies/jwt.strategy';

@ApiTags('student-programs')
@ApiBearerAuth()
@Controller('student-programs')
export class StudentProgramsController {
  constructor(private readonly studentProgramsService: StudentProgramsService) {}

  @ApiOperation({ summary: 'Enroll a student in a program (auto-populates skills)' })
  @ApiCreatedResponse({ description: 'Student enrolled successfully.' })
  @ApiNotFoundResponse({ description: 'Program location not found.' })
  @ApiConflictResponse({ description: 'Student already enrolled, or program location at full capacity.' })
  @Post()
  async enroll(@Body() createDto: CreateStudentProgramDto, @CurrentUser() user: AuthUser) {
    return this.studentProgramsService.enroll(createDto, user.academyId!);
  }

  @ApiOperation({ summary: 'List enrollments (filter by studentId or programId)' })
  @ApiOkResponse({ description: 'Returns a list of enrollments.' })
  @ApiQuery({ name: 'studentId', required: false, type: String })
  @ApiQuery({ name: 'programLocationId', required: false, type: String })
  @Get()
  async findAll(
    @CurrentUser() user: AuthUser,
    @Query('studentId') studentId?: string,
    @Query('programLocationId') programLocationId?: string,
  ) {
    return this.studentProgramsService.findAll(user.academyId!, studentId, programLocationId);
  }

  @ApiOperation({ summary: 'Get enrollment details with skills' })
  @ApiOkResponse({ description: 'Returns enrollment details.' })
  @ApiNotFoundResponse({ description: 'Enrollment not found.' })
  @Get(':id')
  async findOne(@Param('id') id: string, @CurrentUser() user: AuthUser) {
    return this.studentProgramsService.findOne(id, user.academyId!);
  }

  @ApiOperation({ summary: 'Get payment balance for an enrollment' })
  @ApiOkResponse({ description: 'Returns finalPrice, totalPaid, balance.' })
  @ApiNotFoundResponse()
  @Get(':id/balance')
  async getBalance(@Param('id') id: string, @CurrentUser() user: AuthUser) {
    return this.studentProgramsService.getBalance(id, user.academyId!);
  }

  @ApiOperation({ summary: 'Soft-delete an enrollment (deactivate)' })
  @ApiOkResponse({ description: 'Enrollment deactivated.' })
  @ApiNotFoundResponse({ description: 'Enrollment not found.' })
  @Delete(':id')
  async remove(@Param('id') id: string, @CurrentUser() user: AuthUser) {
    return this.studentProgramsService.remove(id, user.academyId!);
  }

  @ApiOperation({ summary: 'Hard-delete an enrollment (permanent, cascades skills & attendance)' })
  @ApiNoContentResponse({ description: 'Enrollment permanently deleted.' })
  @ApiNotFoundResponse({ description: 'Enrollment not found.' })
  @Delete('hard/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async hardRemove(@Param('id') id: string, @CurrentUser() user: AuthUser) {
    return this.studentProgramsService.hardRemove(id, user.academyId!);
  }
}
