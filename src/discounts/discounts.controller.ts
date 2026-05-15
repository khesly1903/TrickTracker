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
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { DiscountsService } from './discounts.service';
import { CreateDiscountDto } from './dto/create-discount.dto';
import { UpdateDiscountDto } from './dto/update-discount.dto';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import type { AuthUser } from '../auth/strategies/jwt.strategy';

@ApiTags('discounts')
@ApiBearerAuth()
@Controller('discounts')
export class DiscountsController {
  constructor(private readonly service: DiscountsService) {}

  @ApiOperation({ summary: 'Create a discount for the academy' })
  @ApiCreatedResponse()
  @ApiConflictResponse()
  @Post()
  create(@Body() dto: CreateDiscountDto, @CurrentUser() user: AuthUser) {
    return this.service.create(dto, user.academyId!);
  }

  @ApiOperation({ summary: 'List all discounts for the academy' })
  @ApiOkResponse()
  @Get()
  findAll(@CurrentUser() user: AuthUser) {
    return this.service.findAll(user.academyId!);
  }

  @ApiOperation({ summary: 'Get a discount by ID' })
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @Get(':id')
  findOne(@Param('id') id: string, @CurrentUser() user: AuthUser) {
    return this.service.findOne(id, user.academyId!);
  }

  @ApiOperation({ summary: 'Update a discount' })
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateDiscountDto, @CurrentUser() user: AuthUser) {
    return this.service.update(id, dto, user.academyId!);
  }

  @ApiOperation({ summary: 'Delete a discount' })
  @ApiNoContentResponse()
  @ApiNotFoundResponse()
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string, @CurrentUser() user: AuthUser) {
    return this.service.remove(id, user.academyId!);
  }
}
