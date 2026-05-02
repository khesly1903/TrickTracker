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
  ApiBearerAuth,
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
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import type { AuthUser } from '../auth/strategies/jwt.strategy';

@ApiTags('program-stages')
@ApiBearerAuth()
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
    @CurrentUser() user: AuthUser,
  ) {
    return this.service.create(programId, dto, user.academyId!);
  }

  @ApiOperation({ summary: 'List all stages for a program' })
  @ApiOkResponse({ description: 'Returns list of stages.' })
  @ApiNotFoundResponse({ description: 'Program not found.' })
  @Get()
  async findAll(@Param('programId') programId: string, @CurrentUser() user: AuthUser) {
    return this.service.findAll(programId, user.academyId!);
  }

  @ApiOperation({ summary: 'Get a stage by ID' })
  @ApiOkResponse({ description: 'Returns stage.' })
  @ApiNotFoundResponse({ description: 'Program stage not found.' })
  @Get(':id')
  async findOne(
    @Param('programId') programId: string,
    @Param('id') id: string,
    @CurrentUser() user: AuthUser,
  ) {
    return this.service.findOne(programId, id, user.academyId!);
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
    @CurrentUser() user: AuthUser,
  ) {
    return this.service.update(programId, id, dto, user.academyId!);
  }

  @ApiOperation({ summary: 'Delete a stage from a program' })
  @ApiNoContentResponse({ description: 'Stage deleted.' })
  @ApiNotFoundResponse({ description: 'Program stage not found.' })
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(
    @Param('programId') programId: string,
    @Param('id') id: string,
    @CurrentUser() user: AuthUser,
  ) {
    return this.service.remove(programId, id, user.academyId!);
  }
}
