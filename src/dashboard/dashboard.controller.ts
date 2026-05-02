import { Controller, Get } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Public } from '../auth/decorators/public.decorator';

@ApiTags('dashboard')
@Public()
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
