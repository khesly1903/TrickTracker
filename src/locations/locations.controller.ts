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
import { LocationsService } from './locations.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
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

@ApiTags('locations')
@ApiBearerAuth()
@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @ApiOperation({ summary: 'Register a new training location' })
  @ApiCreatedResponse({ description: 'Location successfully created.' })
  @Post()
  async create(@Body() createLocationDto: CreateLocationDto, @CurrentUser() user: AuthUser) {
    return this.locationsService.create(createLocationDto, user.academyId!);
  }

  @ApiOperation({ summary: 'Retrieve all active locations' })
  @ApiOkResponse({ description: 'Return a list of all active locations.' })
  @Get()
  async findAll(@CurrentUser() user: AuthUser) {
    return this.locationsService.findAll(user.academyId!);
  }

  @ApiOperation({ summary: 'Get location by ID' })
  @ApiOkResponse({ description: 'Return the location record.' })
  @ApiNotFoundResponse({ description: 'Location not found.' })
  @Get(':id')
  async findOne(@Param('id') id: string, @CurrentUser() user: AuthUser) {
    return this.locationsService.findOne(id, user.academyId!);
  }

  @ApiOperation({ summary: 'Update a location record' })
  @ApiOkResponse({ description: 'Location successfully updated.' })
  @ApiNotFoundResponse({ description: 'Location not found.' })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateLocationDto: UpdateLocationDto,
    @CurrentUser() user: AuthUser,
  ) {
    return this.locationsService.update(id, updateLocationDto, user.academyId!);
  }

  @ApiOperation({ summary: 'Permanently delete a location' })
  @ApiNoContentResponse({ description: 'Location permanently deleted.' })
  @ApiNotFoundResponse({ description: 'Location not found.' })
  @Delete('hard/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async hardRemove(@Param('id') id: string, @CurrentUser() user: AuthUser) {
    return this.locationsService.hardRemove(id, user.academyId!);
  }

  @ApiOperation({ summary: 'Soft-delete a location' })
  @ApiNoContentResponse({ description: 'Location soft-deleted (isActive set to false).' })
  @ApiNotFoundResponse({ description: 'Location not found.' })
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string, @CurrentUser() user: AuthUser) {
    return this.locationsService.remove(id, user.academyId!);
  }
}
