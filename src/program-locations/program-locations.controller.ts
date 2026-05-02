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
  Query,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { ProgramLocationsService } from './program-locations.service';
import { CreateProgramLocationDto } from './dto/create-program-location.dto';
import { UpdateProgramLocationDto } from './dto/update-program-location.dto';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import type { AuthUser } from '../auth/strategies/jwt.strategy';

@ApiTags('program-locations')
@ApiBearerAuth()
@Controller('program-locations')
export class ProgramLocationsController {
  constructor(private readonly service: ProgramLocationsService) {}

  @ApiOperation({ summary: 'Add a location to an existing program' })
  @ApiCreatedResponse({ description: 'Program location created; sessions auto-generated.' })
  @ApiNotFoundResponse({ description: 'Program or location not found.' })
  @ApiConflictResponse({ description: 'Location already assigned to this program.' })
  @Post()
  async create(@Body() dto: CreateProgramLocationDto, @CurrentUser() user: AuthUser) {
    return this.service.create(dto, user.academyId!);
  }

  @ApiOperation({ summary: 'List program locations, optionally filtered by programId' })
  @ApiOkResponse({ description: 'Returns list of program locations.' })
  @ApiQuery({ name: 'programId', required: false, type: String })
  @Get()
  async findAll(@CurrentUser() user: AuthUser, @Query('programId') programId?: string) {
    return this.service.findAll(user.academyId!, programId);
  }

  @ApiOperation({ summary: 'Get program location details by ID' })
  @ApiOkResponse({ description: 'Returns program location with schedules and session count.' })
  @ApiNotFoundResponse({ description: 'Program location not found.' })
  @Get(':id')
  async findOne(@Param('id') id: string, @CurrentUser() user: AuthUser) {
    return this.service.findOne(id, user.academyId!);
  }

  @ApiOperation({ summary: 'Update price, capacity, or main instructor' })
  @ApiOkResponse({ description: 'Program location updated.' })
  @ApiNotFoundResponse({ description: 'Program location not found.' })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateProgramLocationDto,
    @CurrentUser() user: AuthUser,
  ) {
    return this.service.update(id, dto, user.academyId!);
  }

  @ApiOperation({ summary: 'Remove a location from a program (hard delete)' })
  @ApiNoContentResponse({ description: 'Program location deleted; cascades to schedules and sessions.' })
  @ApiNotFoundResponse({ description: 'Program location not found.' })
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string, @CurrentUser() user: AuthUser) {
    return this.service.remove(id, user.academyId!);
  }

  @ApiOperation({ summary: 'Add a backup instructor to this location' })
  @ApiOkResponse({ description: 'Backup instructor added.' })
  @ApiNotFoundResponse({ description: 'Program location or instructor not found.' })
  @Post(':id/instructors/backup/:instructorId')
  async addBackupInstructor(
    @Param('id') id: string,
    @Param('instructorId') instructorId: string,
    @CurrentUser() user: AuthUser,
  ) {
    return this.service.addBackupInstructor(id, instructorId, user.academyId!);
  }

  @ApiOperation({ summary: 'Remove a backup instructor from this location' })
  @ApiOkResponse({ description: 'Backup instructor removed.' })
  @ApiNotFoundResponse({ description: 'Program location not found.' })
  @Delete(':id/instructors/backup/:instructorId')
  async removeBackupInstructor(
    @Param('id') id: string,
    @Param('instructorId') instructorId: string,
    @CurrentUser() user: AuthUser,
  ) {
    return this.service.removeBackupInstructor(id, instructorId, user.academyId!);
  }
}
