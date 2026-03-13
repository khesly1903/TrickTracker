import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('system')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({ summary: 'API Health Check' })
  @ApiOkResponse({
    description: 'Returns the health status of the API.',
  })
  @Get()
  getHealthStatus() {
    return this.appService.getHealthStatus();
  }
}
