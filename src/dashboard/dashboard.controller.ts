import { Controller, Get } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import type { AuthUser } from '../auth/strategies/jwt.strategy';

@ApiTags('dashboard')
@ApiBearerAuth()
@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @ApiOperation({ summary: 'Get summary data for the dashboard' })
  @ApiOkResponse({
    description: 'Returns overall metrics, recent activity, upcoming sessions, and data distributions.',
  })
  @Get()
  async getDashboardData(@CurrentUser() user: AuthUser) {
    return this.dashboardService.getDashboardData(user.academyId!);
  }
}
