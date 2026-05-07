import {
  Controller,
  Get,
  Patch,
  Param,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { PortalService } from './portal.service';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { Roles } from '../auth/decorators/roles.decorator';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import type { AuthUser } from '../auth/strategies/jwt.strategy';

@ApiTags('portal')
@ApiBearerAuth()
@Controller('portal')
export class PortalController {
  constructor(private readonly portalService: PortalService) {}

  // ─── Student ────────────────────────────────────────────────────────────────

  @Get('student/me')
  @Roles(Role.STUDENT)
  @ApiOperation({ summary: 'Get student portal data (programs + skills)' })
  @ApiResponse({ status: 200 })
  getStudentPortal(@CurrentUser() user: AuthUser) {
    return this.portalService.getStudentPortal(user.id);
  }

  // ─── Parent ─────────────────────────────────────────────────────────────────

  @Get('parent/students')
  @Roles(Role.PARENT)
  @ApiOperation({ summary: 'Get students linked to this parent (PARENT relation only)' })
  @ApiResponse({ status: 200 })
  getParentStudents(@CurrentUser() user: AuthUser) {
    return this.portalService.getParentStudents(user.id);
  }

  @Get('parent/students/:studentId/programs')
  @Roles(Role.PARENT)
  @ApiOperation({ summary: 'Get programs and skills for a linked student' })
  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 403, description: 'Not a PARENT of this student' })
  getParentStudentPrograms(
    @CurrentUser() user: AuthUser,
    @Param('studentId') studentId: string,
  ) {
    return this.portalService.getParentStudentPrograms(user.id, studentId);
  }

  // ─── Instructor ──────────────────────────────────────────────────────────────

  @Get('instructor/programs')
  @Roles(Role.INSTRUCTOR)
  @ApiOperation({ summary: 'Get programs taught by this instructor' })
  @ApiResponse({ status: 200 })
  getInstructorPrograms(@CurrentUser() user: AuthUser) {
    return this.portalService.getInstructorPrograms(user.id);
  }

  @Patch('instructor/skills/:skillId')
  @Roles(Role.INSTRUCTOR)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update student skill status (instructor only)' })
  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 403, description: 'Skill not in instructor program' })
  updateSkill(
    @CurrentUser() user: AuthUser,
    @Param('skillId') skillId: string,
    @Body() dto: UpdateSkillDto,
  ) {
    return this.portalService.updateInstructorSkill(user.id, skillId, dto);
  }
}
