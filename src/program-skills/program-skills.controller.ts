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
import { ProgramSkillsService } from './program-skills.service';
import { BulkAddProgramSkillsDto } from './dto/add-program-skills.dto';
import { UpdateProgramSkillDto } from './dto/update-program-skill.dto';
import {
  ApiBearerAuth,
  ApiTags,
  ApiOperation,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiConflictResponse,
  ApiNoContentResponse,
} from '@nestjs/swagger';

@ApiTags('program-skills')
@ApiBearerAuth()
@Controller('program-skills')
export class ProgramSkillsController {
  constructor(private readonly service: ProgramSkillsService) {}

  @ApiOperation({ summary: 'Add multiple skills/tricks to a stage in bulk' })
  @ApiCreatedResponse({ description: 'Skills added to stage.' })
  @ApiNotFoundResponse({ description: 'Program stage not found.' })
  @Post('stage/:stageId')
  async addSkills(
    @Param('stageId') stageId: string,
    @Body() dto: BulkAddProgramSkillsDto,
  ) {
    return this.service.addSkills(stageId, dto.skills);
  }

  @ApiOperation({ summary: 'List all skills/tricks for a stage' })
  @ApiOkResponse({ description: 'Returns skills for the stage.' })
  @ApiNotFoundResponse({ description: 'Program stage not found.' })
  @Get('stage/:stageId')
  async findAllByStage(@Param('stageId') stageId: string) {
    return this.service.findAllByStage(stageId);
  }

  @ApiOperation({ summary: 'Get a skill/trick by ID' })
  @ApiOkResponse({ description: 'Returns the skill.' })
  @ApiNotFoundResponse({ description: 'Program skill not found.' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @ApiOperation({ summary: 'Update a skill/trick' })
  @ApiOkResponse({ description: 'Skill updated.' })
  @ApiNotFoundResponse({ description: 'Program skill not found.' })
  @ApiConflictResponse({ description: 'Skill name already exists in this stage.' })
  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateProgramSkillDto) {
    return this.service.update(id, dto);
  }

  @ApiOperation({ summary: 'Delete a skill/trick from a stage' })
  @ApiNoContentResponse({ description: 'Skill deleted.' })
  @ApiNotFoundResponse({ description: 'Program skill not found.' })
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
