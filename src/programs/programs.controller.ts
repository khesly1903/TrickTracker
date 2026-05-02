import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ProgramsService } from './programs.service';
import { CreateProgramDto } from './dto/create-program.dto';
import { UpdateProgramDto } from './dto/update-program.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import type { AuthUser } from '../auth/strategies/jwt.strategy';

@ApiTags('programs')
@ApiBearerAuth()
@Controller('programs')
export class ProgramsController {
  constructor(private readonly programsService: ProgramsService) {}

  @ApiOperation({ summary: 'Plan a new education program' })
  @ApiCreatedResponse({ description: 'Program successfully created.' })
  @Post()
  async create(@Body() createProgramDto: CreateProgramDto, @CurrentUser() user: AuthUser) {
    return this.programsService.create(createProgramDto, user.academyId!);
  }

  @ApiOperation({ summary: 'List all active programs' })
  @ApiOkResponse({ description: 'Return a list of all active programs.' })
  @Get()
  async findAll(@CurrentUser() user: AuthUser) {
    return this.programsService.findAll(user.academyId!);
  }

  @ApiOperation({ summary: 'Get program details by ID' })
  @ApiOkResponse({ description: 'Return the program full details.' })
  @ApiNotFoundResponse({ description: 'Program not found.' })
  @Get(':id')
  async findOne(@Param('id') id: string, @CurrentUser() user: AuthUser) {
    return this.programsService.findOne(id, user.academyId!);
  }

  @ApiOperation({ summary: 'Edit a program record' })
  @ApiOkResponse({ description: 'Program successfully updated.' })
  @ApiNotFoundResponse({ description: 'Program not found.' })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProgramDto: UpdateProgramDto,
    @CurrentUser() user: AuthUser,
  ) {
    return this.programsService.update(id, updateProgramDto, user.academyId!);
  }

  @ApiOperation({ summary: 'Permanently remove a program' })
  @ApiNoContentResponse({ description: 'Program permanently deleted.' })
  @ApiNotFoundResponse({ description: 'Program not found.' })
  @Delete('hard/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async hardRemove(@Param('id') id: string, @CurrentUser() user: AuthUser) {
    return this.programsService.hardRemove(id, user.academyId!);
  }

  @ApiOperation({ summary: 'Soft-delete a program' })
  @ApiNoContentResponse({ description: 'Program soft-deleted (isActive set to false).' })
  @ApiNotFoundResponse({ description: 'Program not found.' })
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string, @CurrentUser() user: AuthUser) {
    return this.programsService.remove(id, user.academyId!);
  }
}
