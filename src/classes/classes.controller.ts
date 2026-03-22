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
import { ClassesService } from './classes.service';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('classes')
@Controller('classes')
export class ClassesController {
  constructor(private readonly classesService: ClassesService) {}

  @ApiOperation({ summary: 'Create a new class category' })
  @ApiCreatedResponse({ description: 'Class successfully created.' })
  @Post()
  async create(@Body() createClassDto: CreateClassDto) {
    return this.classesService.create(createClassDto);
  }

  @ApiOperation({ summary: 'Retrieve all active classes' })
  @ApiOkResponse({ description: 'Return a list of all active classes.' })
  @Get()
  async findAll() {
    return this.classesService.findAll();
  }

  @ApiOperation({ summary: 'Get class by ID' })
  @ApiOkResponse({ description: 'Return the class record.' })
  @ApiNotFoundResponse({ description: 'Class not found.' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.classesService.findOne(id);
  }

  @ApiOperation({ summary: 'Update a class record' })
  @ApiOkResponse({ description: 'Class successfully updated.' })
  @ApiNotFoundResponse({ description: 'Class not found.' })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateClassDto: UpdateClassDto,
  ) {
    return this.classesService.update(id, updateClassDto);
  }

  @ApiOperation({ summary: 'Permanently delete a class' })
  @ApiNoContentResponse({ description: 'Class permanently deleted.' })
  @ApiNotFoundResponse({ description: 'Class not found.' })
  @Delete('hard/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async hardRemove(@Param('id') id: string) {
    return this.classesService.hardRemove(id);
  }

  @ApiOperation({ summary: 'Soft-delete a class' })
  @ApiNoContentResponse({
    description: 'Class soft-deleted (isActive set to false).',
  })
  @ApiNotFoundResponse({ description: 'Class not found.' })
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string) {
    return this.classesService.remove(id);
  }
}
