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
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { Public } from '../auth/decorators/public.decorator';

@ApiTags('locations')
@Public()
@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @ApiOperation({ summary: 'Register a new training location' })
  @ApiCreatedResponse({ description: 'Location successfully created.' })
  @Post()
  async create(@Body() createLocationDto: CreateLocationDto) {
    return this.locationsService.create(createLocationDto);
  }

  @ApiOperation({ summary: 'Retrieve all active locations' })
  @ApiOkResponse({ description: 'Return a list of all active locations.' })
  @Get()
  async findAll() {
    return this.locationsService.findAll();
  }

  @ApiOperation({ summary: 'Get location by ID' })
  @ApiOkResponse({ description: 'Return the location record.' })
  @ApiNotFoundResponse({ description: 'Location not found.' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.locationsService.findOne(id);
  }

  @ApiOperation({ summary: 'Update a location record' })
  @ApiOkResponse({ description: 'Location successfully updated.' })
  @ApiNotFoundResponse({ description: 'Location not found.' })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateLocationDto: UpdateLocationDto,
  ) {
    return this.locationsService.update(id, updateLocationDto);
  }

  @ApiOperation({ summary: 'Permanently delete a location' })
  @ApiNoContentResponse({ description: 'Location permanently deleted.' })
  @ApiNotFoundResponse({ description: 'Location not found.' })
  @Delete('hard/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async hardRemove(@Param('id') id: string) {
    return this.locationsService.hardRemove(id);
  }

  @ApiOperation({ summary: 'Soft-delete a location' })
  @ApiNoContentResponse({
    description: 'Location soft-deleted (isActive set to false).',
  })
  @ApiNotFoundResponse({ description: 'Location not found.' })
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string) {
    return this.locationsService.remove(id);
  }
}
