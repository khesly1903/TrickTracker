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
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { ProgramStagesService } from './program-stages.service';
import { CreateProgramStageDto } from './dto/create-program-stage.dto';
import { UpdateProgramStageDto } from './dto/update-program-stage.dto';

@ApiTags('program-stages')
@Controller('programs/:programId/stages')
export class ProgramStagesController {
  constructor(private readonly service: ProgramStagesService) {}

  @ApiOperation({ summary: 'Add a stage to a program' })
  @ApiCreatedResponse({ description: 'Stage created.' })
  @ApiNotFoundResponse({ description: 'Program not found.' })
  @ApiConflictResponse({ description: 'Stage name already exists for this program.' })
  @Post()
  async create(
    @Param('programId') programId: string,
    @Body() dto: CreateProgramStageDto,
  ) {
    return this.service.create(programId, dto);
  }

  @ApiOperation({ summary: 'List all stages for a program' })
  @ApiOkResponse({ description: 'Returns list of stages.' })
  @ApiNotFoundResponse({ description: 'Program not found.' })
  @Get()
  async findAll(@Param('programId') programId: string) {
    return this.service.findAll(programId);
  }

  @ApiOperation({ summary: 'Get a stage by ID' })
  @ApiOkResponse({ description: 'Returns stage.' })
  @ApiNotFoundResponse({ description: 'Program stage not found.' })
  @Get(':id')
  async findOne(
    @Param('programId') programId: string,
    @Param('id') id: string,
  ) {
    return this.service.findOne(programId, id);
  }

  @ApiOperation({ summary: 'Update a stage name' })
  @ApiOkResponse({ description: 'Stage updated.' })
  @ApiNotFoundResponse({ description: 'Program stage not found.' })
  @ApiConflictResponse({ description: 'Stage name already exists for this program.' })
  @Patch(':id')
  async update(
    @Param('programId') programId: string,
    @Param('id') id: string,
    @Body() dto: UpdateProgramStageDto,
  ) {
    return this.service.update(programId, id, dto);
  }

  @ApiOperation({ summary: 'Delete a stage from a program' })
  @ApiNoContentResponse({ description: 'Stage deleted.' })
  @ApiNotFoundResponse({ description: 'Program stage not found.' })
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(
    @Param('programId') programId: string,
    @Param('id') id: string,
  ) {
    return this.service.remove(programId, id);
  }
}
