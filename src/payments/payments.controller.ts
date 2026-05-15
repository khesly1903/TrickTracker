import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
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
import { PaymentsService } from './payments.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import type { AuthUser } from '../auth/strategies/jwt.strategy';

@ApiTags('payments')
@ApiBearerAuth()
@Controller('payments')
export class PaymentsController {
  constructor(private readonly service: PaymentsService) {}

  @ApiOperation({ summary: 'Record a payment for an enrollment' })
  @ApiCreatedResponse()
  @Post()
  create(@Body() dto: CreatePaymentDto, @CurrentUser() user: AuthUser) {
    return this.service.create(dto, user.academyId!);
  }

  @ApiOperation({ summary: 'List payments for an enrollment' })
  @ApiOkResponse()
  @ApiQuery({ name: 'studentProgramId', required: true, type: String })
  @Get()
  findAll(@Query('studentProgramId') studentProgramId: string, @CurrentUser() user: AuthUser) {
    return this.service.findAll(studentProgramId, user.academyId!);
  }

  @ApiOperation({ summary: 'Combined payment plan for all of a student enrollments' })
  @ApiOkResponse()
  @Get('plan/:studentId')
  plan(@Param('studentId') studentId: string, @CurrentUser() user: AuthUser) {
    return this.service.getStudentPaymentPlan(studentId, user.academyId!);
  }

  @ApiOperation({ summary: 'Delete a payment' })
  @ApiNoContentResponse()
  @ApiNotFoundResponse()
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string, @CurrentUser() user: AuthUser) {
    return this.service.remove(id, user.academyId!);
  }
}
