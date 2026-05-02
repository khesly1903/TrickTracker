import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { StudentProgramSkillsService } from './student-program-skills.service';
import { UpdateStudentProgramSkillDto } from './dto/update-student-program-skill.dto';
import {
  ApiBearerAuth,
  ApiTags,
  ApiOperation,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiNoContentResponse,
} from '@nestjs/swagger';

@ApiTags('student-program-skills')
@ApiBearerAuth()
@Controller('student-program-skills')
export class StudentProgramSkillsController {
  constructor(
    private readonly studentProgramSkillsService: StudentProgramSkillsService,
  ) {}

  @ApiOperation({
    summary:
      'Re-sync: populate newly added curriculum skills for an existing enrollment (skips duplicates)',
  })
  @ApiCreatedResponse({
    description: 'Missing skills synced. Already assigned skills are skipped.',
  })
  @ApiNotFoundResponse({ description: 'Student enrollment not found.' })
  @Post('populate/:studentProgramId')
  async populateForEnrollment(
    @Param('studentProgramId') studentProgramId: string,
  ) {
    return this.studentProgramSkillsService.populateForEnrollment(
      studentProgramId,
    );
  }

  @ApiOperation({
    summary: 'List all skills and status for a student enrollment',
  })
  @ApiOkResponse({
    description: 'Returns a list of skills with progress status.',
  })
  @ApiNotFoundResponse({ description: 'Student enrollment not found.' })
  @Get('enrollment/:studentProgramId')
  async findAllByEnrollment(
    @Param('studentProgramId') studentProgramId: string,
  ) {
    return this.studentProgramSkillsService.findAllByEnrollment(
      studentProgramId,
    );
  }

  @ApiOperation({
    summary: 'Get a specific student program skill record by ID',
  })
  @ApiOkResponse({
    description: 'Returns a single student program skill record.',
  })
  @ApiNotFoundResponse({ description: 'Record not found.' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.studentProgramSkillsService.findOne(id);
  }

  @ApiOperation({
    summary: 'Update skill status, note, or updatedBy for a student skill record',
  })
  @ApiOkResponse({ description: 'Skill record updated successfully.' })
  @ApiNotFoundResponse({ description: 'Record not found.' })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateStudentProgramSkillDto,
  ) {
    return this.studentProgramSkillsService.update(id, updateDto);
  }

  @ApiOperation({ summary: 'Remove a specific student program skill record' })
  @ApiNoContentResponse({ description: 'Record deleted successfully.' })
  @ApiNotFoundResponse({ description: 'Record not found.' })
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string) {
    return this.studentProgramSkillsService.remove(id);
  }
}
