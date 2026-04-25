import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { ProgramSchedulesService } from './program-schedules.service';
import { CreateProgramScheduleDto } from './dto/create-program-schedule.dto';
import { UpdateProgramScheduleDto } from './dto/update-program-schedule.dto';

@ApiTags('program-schedules')
@Controller('program-schedules')
export class ProgramSchedulesController {
  constructor(private readonly service: ProgramSchedulesService) {}

  @ApiOperation({
    summary: 'Add a recurring schedule to a program location',
    description: 'Creates the schedule and auto-generates future sessions from today to the program end date.',
  })
  @ApiCreatedResponse({ description: 'Schedule created; sessions generated.' })
  @ApiNotFoundResponse({ description: 'Program location not found.' })
  @Post()
  async create(@Body() dto: CreateProgramScheduleDto) {
    return this.service.create(dto);
  }

  @ApiOperation({ summary: 'Get a schedule by ID' })
  @ApiOkResponse({ description: 'Returns schedule with programLocation and program.' })
  @ApiNotFoundResponse({ description: 'Program schedule not found.' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @ApiOperation({
    summary: 'Update a schedule',
    description: 'Updates schedule fields and regenerates all future sessions tied to this schedule.',
  })
  @ApiOkResponse({ description: 'Schedule updated; future sessions regenerated.' })
  @ApiNotFoundResponse({ description: 'Program schedule not found.' })
  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateProgramScheduleDto) {
    return this.service.update(id, dto);
  }

  @ApiOperation({
    summary: 'Delete a schedule',
    description: 'Deletes the schedule and all its future sessions. Past sessions are preserved.',
  })
  @ApiNoContentResponse({ description: 'Schedule and future sessions deleted.' })
  @ApiNotFoundResponse({ description: 'Program schedule not found.' })
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
