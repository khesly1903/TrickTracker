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
import { DiscountOverridesService } from './discount-overrides.service';
import { CreateDiscountOverrideDto } from './dto/create-discount-override.dto';
import { UpdateDiscountOverrideDto } from './dto/update-discount-override.dto';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import type { AuthUser } from '../auth/strategies/jwt.strategy';

@ApiTags('discount-overrides')
@ApiBearerAuth()
@Controller('discount-overrides')
export class DiscountOverridesController {
  constructor(private readonly service: DiscountOverridesService) {}

  @ApiOperation({ summary: 'Create a discount override for a program location' })
  @ApiCreatedResponse()
  @ApiConflictResponse()
  @Post()
  create(@Body() dto: CreateDiscountOverrideDto, @CurrentUser() user: AuthUser) {
    return this.service.create(dto, user.academyId!);
  }

  @ApiOperation({ summary: 'List discount overrides for a program location' })
  @ApiOkResponse()
  @ApiQuery({ name: 'programLocationId', required: true, type: String })
  @Get()
  findAll(@Query('programLocationId') programLocationId: string, @CurrentUser() user: AuthUser) {
    return this.service.findAll(programLocationId, user.academyId!);
  }

  @ApiOperation({ summary: 'Get a discount override by ID' })
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @Get(':id')
  findOne(@Param('id') id: string, @CurrentUser() user: AuthUser) {
    return this.service.findOne(id, user.academyId!);
  }

  @ApiOperation({ summary: 'Update a discount override' })
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateDiscountOverrideDto, @CurrentUser() user: AuthUser) {
    return this.service.update(id, dto, user.academyId!);
  }

  @ApiOperation({ summary: 'Delete a discount override' })
  @ApiNoContentResponse()
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string, @CurrentUser() user: AuthUser) {
    return this.service.remove(id, user.academyId!);
  }
}
