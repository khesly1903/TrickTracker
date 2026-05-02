import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AcademiesService } from './academies.service';
import { SetupAcademyDto } from './dto/setup-academy.dto';
import { AcademyResponseDto } from './dto/academy-response.dto';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import type { AuthUser } from '../auth/strategies/jwt.strategy';

@ApiTags('academies')
@ApiBearerAuth()
@Controller('academies')
export class AcademiesController {
  constructor(private readonly academiesService: AcademiesService) {}

  @Post('setup')
  @ApiOperation({ summary: 'Set up academy for the authenticated admin' })
  @ApiResponse({ status: 201, type: AcademyResponseDto })
  @ApiResponse({ status: 409, description: 'Academy already exists' })
  setup(@CurrentUser() user: AuthUser, @Body() dto: SetupAcademyDto): Promise<AcademyResponseDto> {
    return this.academiesService.setup(user.id, dto);
  }

  @Get('me')
  @ApiOperation({ summary: 'Get current admin academy' })
  @ApiResponse({ status: 200, type: AcademyResponseDto })
  getMyAcademy(@CurrentUser() user: AuthUser): Promise<AcademyResponseDto> {
    return this.academiesService.getMyAcademy(user.id);
  }
}
