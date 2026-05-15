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
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { PriceOptionsService } from './price-options.service';
import { CreatePriceOptionDto } from './dto/create-price-option.dto';
import { UpdatePriceOptionDto } from './dto/update-price-option.dto';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import type { AuthUser } from '../auth/strategies/jwt.strategy';

@ApiTags('price-options')
@ApiBearerAuth()
@Controller('price-options')
export class PriceOptionsController {
  constructor(private readonly service: PriceOptionsService) {}

  @ApiOperation({ summary: 'Create a price option for a program location' })
  @ApiCreatedResponse()
  @Post()
  create(@Body() dto: CreatePriceOptionDto, @CurrentUser() user: AuthUser) {
    return this.service.create(dto, user.academyId!);
  }

  @ApiOperation({ summary: 'List price options for a program location' })
  @ApiOkResponse()
  @ApiQuery({ name: 'programLocationId', required: true, type: String })
  @Get()
  findAll(@Query('programLocationId') programLocationId: string, @CurrentUser() user: AuthUser) {
    return this.service.findAll(programLocationId, user.academyId!);
  }

  @ApiOperation({ summary: 'Get a price option by ID' })
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @Get(':id')
  findOne(@Param('id') id: string, @CurrentUser() user: AuthUser) {
    return this.service.findOne(id, user.academyId!);
  }

  @ApiOperation({ summary: 'Update a price option' })
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdatePriceOptionDto, @CurrentUser() user: AuthUser) {
    return this.service.update(id, dto, user.academyId!);
  }

  @ApiOperation({ summary: 'Delete a price option' })
  @ApiNoContentResponse()
  @ApiNotFoundResponse()
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string, @CurrentUser() user: AuthUser) {
    return this.service.remove(id, user.academyId!);
  }
}
