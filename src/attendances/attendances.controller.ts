import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AttendancesService } from './attendances.service';
import { BulkAttendanceDto } from './dto/bulk-attendance.dto';
import {
  ApiTags,
  ApiOperation,
  ApiOkResponse,
  ApiCreatedResponse,
} from '@nestjs/swagger';

@ApiTags('attendances')
@Controller('attendances')
export class AttendancesController {
  constructor(private readonly attendancesService: AttendancesService) {}

  @ApiOperation({ summary: 'Record or update bulk attendance for a session' })
  @ApiCreatedResponse({ description: 'Attendance recorded successfully.' })
  @Post('bulk')
  async takeBulkAttendance(@Body() bulkDto: BulkAttendanceDto) {
    return this.attendancesService.takeBulkAttendance(bulkDto);
  }

  @ApiOperation({
    summary: 'Get the student list and attendance status for a session',
  })
  @ApiOkResponse({
    description: 'Returns the list of students and their attendance status.',
  })
  @Get('session/:sessionId')
  async getSessionAttendanceList(@Param('sessionId') sessionId: string) {
    return this.attendancesService.getSessionAttendanceList(sessionId);
  }
}
