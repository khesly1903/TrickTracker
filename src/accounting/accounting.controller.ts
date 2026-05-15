import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AccountingService } from './accounting.service';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import type { AuthUser } from '../auth/strategies/jwt.strategy';

@ApiTags('accounting')
@ApiBearerAuth()
@Controller('accounting')
export class AccountingController {
  constructor(private readonly service: AccountingService) {}

  @ApiOperation({ summary: 'Monthly expected vs revenue timeline for the academy' })
  @ApiOkResponse()
  @Get('timeline')
  timeline(@CurrentUser() user: AuthUser) {
    return this.service.getMonthlyTimeline(user.academyId!);
  }

  @ApiOperation({ summary: 'Per-location accounting breakdown with nested programs' })
  @ApiOkResponse()
  @Get('by-location')
  byLocation(@CurrentUser() user: AuthUser) {
    return this.service.getByLocation(user.academyId!);
  }
}
