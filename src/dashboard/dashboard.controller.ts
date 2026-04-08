import { Controller, Get } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('dashboard')
@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @ApiOperation({ summary: 'Get summary data for the dashboard' })
  @ApiOkResponse({
    description:
      'Returns overall metrics, recent activity, upcoming sessions, and data distributions.',
  })
  @Get()
  async getDashboardData() {
    return this.dashboardService.getDashboardData();
  }
}
