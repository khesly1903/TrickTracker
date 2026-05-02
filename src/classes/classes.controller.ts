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

@ApiTags('classes')
@ApiBearerAuth()
@Controller('classes')
export class ClassesController {
  constructor(private readonly classesService: ClassesService) {}

  @ApiOperation({ summary: 'Create a new class category' })
  @ApiCreatedResponse({ description: 'Class successfully created.' })
  @Post()
  async create(@Body() createClassDto: CreateClassDto, @CurrentUser() user: AuthUser) {
    return this.classesService.create(createClassDto, user.academyId!);
  }

  @ApiOperation({ summary: 'Retrieve all active classes' })
  @ApiOkResponse({ description: 'Return a list of all active classes.' })
  @Get()
  async findAll(@CurrentUser() user: AuthUser) {
    return this.classesService.findAll(user.academyId!);
  }

  @ApiOperation({ summary: 'Get class by ID' })
  @ApiOkResponse({ description: 'Return the class record.' })
  @ApiNotFoundResponse({ description: 'Class not found.' })
  @Get(':id')
  async findOne(@Param('id') id: string, @CurrentUser() user: AuthUser) {
    return this.classesService.findOne(id, user.academyId!);
  }

  @ApiOperation({ summary: 'Update a class record' })
  @ApiOkResponse({ description: 'Class successfully updated.' })
  @ApiNotFoundResponse({ description: 'Class not found.' })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateClassDto: UpdateClassDto,
    @CurrentUser() user: AuthUser,
  ) {
    return this.classesService.update(id, updateClassDto, user.academyId!);
  }

  @ApiOperation({ summary: 'Permanently delete a class' })
  @ApiNoContentResponse({ description: 'Class permanently deleted.' })
  @ApiNotFoundResponse({ description: 'Class not found.' })
  @Delete('hard/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async hardRemove(@Param('id') id: string, @CurrentUser() user: AuthUser) {
    return this.classesService.hardRemove(id, user.academyId!);
  }

  @ApiOperation({ summary: 'Soft-delete a class' })
  @ApiNoContentResponse({ description: 'Class soft-deleted (isActive set to false).' })
  @ApiNotFoundResponse({ description: 'Class not found.' })
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string, @CurrentUser() user: AuthUser) {
    return this.classesService.remove(id, user.academyId!);
  }
}
