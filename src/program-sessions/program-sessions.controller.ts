import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ProgramSessionsService } from './program-sessions.service';
import { CreateProgramSessionDto } from './dto/create-program-session.dto';
import { UpdateProgramSessionDto } from './dto/update-program-session.dto';
import { DeleteMultipleSessionsDto } from './dto/delete-multiple-program-sessions.dto';
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('program-sessions')
@Controller('program-sessions')
export class ProgramSessionsController {
  constructor(
    private readonly programSessionsService: ProgramSessionsService,
  ) {}

  @ApiOperation({ summary: 'Create a manual program session (Ad-hoc)' })
  @ApiCreatedResponse({ description: 'Session created successfully.' })
  @Post()
  async create(@Body() createProgramSessionDto: CreateProgramSessionDto) {
    return this.programSessionsService.create(createProgramSessionDto);
  }

  @ApiOperation({ summary: 'List program sessions' })
  @ApiOkResponse({ description: 'Return a list of program sessions.' })
  @ApiQuery({ name: 'programLocationId', required: false })
  @ApiQuery({ name: 'dateFrom', required: false, description: 'ISO date string (inclusive)' })
  @ApiQuery({ name: 'dateTo', required: false, description: 'ISO date string (inclusive)' })
  @Get()
  async findAll(
    @Query('programLocationId') programLocationId?: string,
    @Query('dateFrom') dateFrom?: string,
    @Query('dateTo') dateTo?: string,
  ) {
    return this.programSessionsService.findAll(programLocationId, dateFrom, dateTo);
  }

  @ApiOperation({ summary: 'Delete multiple manually generated sessions' })
  @ApiOkResponse({ description: 'Sessions successfully deleted.' })
  @Delete('bulk')
  async removeMultiple(@Body() deleteDto: DeleteMultipleSessionsDto) {
    return this.programSessionsService.removeMultiple(deleteDto.ids);
  }

  @ApiOperation({ summary: 'Get a specific program session details by ID' })
  @ApiOkResponse({ description: 'Returns a single program session.' })
  @ApiNotFoundResponse({ description: 'Session not found.' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.programSessionsService.findOne(id);
  }

  @ApiOperation({ summary: 'Update a session manually (Modify date or type)' })
  @ApiOkResponse({ description: 'Session updated successfully.' })
  @ApiNotFoundResponse({ description: 'Session not found.' })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProgramSessionDto: UpdateProgramSessionDto,
  ) {
    return this.programSessionsService.update(id, updateProgramSessionDto);
  }

  @ApiOperation({ summary: 'Delete a single manually generated session' })
  @ApiNoContentResponse({ description: 'Session successfully deleted.' })
  @ApiNotFoundResponse({ description: 'Session not found.' })
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string) {
    return this.programSessionsService.remove(id);
  }
}
