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
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('programs')
@Controller('programs')
export class ProgramsController {
  constructor(private readonly programsService: ProgramsService) {}

  @ApiOperation({ summary: 'Plan a new education program' })
  @ApiCreatedResponse({ description: 'Program successfully created.' })
  @Post()
  async create(@Body() createProgramDto: CreateProgramDto) {
    return this.programsService.create(createProgramDto);
  }

  @ApiOperation({ summary: 'List all active programs' })
  @ApiOkResponse({ description: 'Return a list of all active programs.' })
  @Get()
  async findAll() {
    return this.programsService.findAll();
  }

  @ApiOperation({ summary: 'Get program details by ID' })
  @ApiOkResponse({ description: 'Return the program full details.' })
  @ApiNotFoundResponse({ description: 'Program not found.' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.programsService.findOne(id);
  }

  @ApiOperation({ summary: 'Edit a program record' })
  @ApiOkResponse({ description: 'Program successfully updated.' })
  @ApiNotFoundResponse({ description: 'Program not found.' })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProgramDto: UpdateProgramDto,
  ) {
    return this.programsService.update(id, updateProgramDto);
  }

  @ApiOperation({ summary: 'Permanently remove a program' })
  @ApiNoContentResponse({ description: 'Program permanently deleted.' })
  @ApiNotFoundResponse({ description: 'Program not found.' })
  @Delete('hard/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async hardRemove(@Param('id') id: string) {
    return this.programsService.hardRemove(id);
  }

  @ApiOperation({ summary: 'Soft-delete a program' })
  @ApiNoContentResponse({
    description: 'Program soft-deleted (isActive set to false).',
  })
  @ApiNotFoundResponse({ description: 'Program not found.' })
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string) {
    return this.programsService.remove(id);
  }
}
