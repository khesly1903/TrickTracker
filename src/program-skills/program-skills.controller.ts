import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  Query,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ProgramSkillsService } from './program-skills.service';
import { BulkAddProgramSkillsDto } from './dto/add-program-skills.dto';
import { UpdateProgramSkillDto } from './dto/update-program-skill.dto';
import {
  ApiTags,
  ApiOperation,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiQuery,
} from '@nestjs/swagger';

@ApiTags('program-skills')
@Controller('program-skills')
export class ProgramSkillsController {
  constructor(private readonly programSkillsService: ProgramSkillsService) {}

  @ApiOperation({
    summary: 'Add multiple skills to a program curriculum in bulk',
  })
  @ApiCreatedResponse({ description: 'Skills added to curriculum.' })
  @ApiNotFoundResponse({ description: 'Program not found.' })
  @Post(':programId')
  async addSkills(
    @Param('programId') programId: string,
    @Body() bulkDto: BulkAddProgramSkillsDto,
  ) {
    return this.programSkillsService.addSkills(programId, bulkDto.skills);
  }

  @ApiOperation({ summary: 'List all skills in a program curriculum' })
  @ApiOkResponse({ description: 'Returns the program curriculum skills.' })
  @ApiQuery({
    name: 'programId',
    required: true,
    type: String,
    description: 'The Program ID',
  })
  @Get()
  async findAllByProgram(@Query('programId') programId: string) {
    return this.programSkillsService.findAllByProgram(programId);
  }

  @ApiOperation({
    summary: 'Get a specific program-skill curriculum record by ID',
  })
  @ApiOkResponse({ description: 'Returns the program skill.' })
  @ApiNotFoundResponse({ description: 'Program skill not found.' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.programSkillsService.findOne(id);
  }

  @ApiOperation({ summary: 'Update a program-specific skill' })
  @ApiOkResponse({ description: 'Skill updated successfully.' })
  @ApiNotFoundResponse({ description: 'Program skill not found.' })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateProgramSkillDto,
  ) {
    return this.programSkillsService.update(id, updateDto);
  }

  @ApiOperation({ summary: 'Remove a skill from a program curriculum' })
  @ApiOkResponse({ description: 'Skill removed from curriculum.' })
  @ApiNotFoundResponse({ description: 'Program skill not found.' })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.programSkillsService.remove(id);
  }
}
