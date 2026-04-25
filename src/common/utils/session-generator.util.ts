import { DayOfWeek, ScheduleType } from '@prisma/client';

// ISO weekday: Monday=1 ... Sunday=7
const ISO_DAY_MAP: Record<DayOfWeek, number> = {
  MONDAY: 1,
  TUESDAY: 2,
  WEDNESDAY: 3,
  THURSDAY: 4,
  FRIDAY: 5,
  SATURDAY: 6,
  SUNDAY: 7,
};

export interface ScheduleInput {
  id?: string;
  dayOfWeek: DayOfWeek;
  startTime: string | Date;
  endTime?: string | Date | null;
  duration: number; // minutes
  type: ScheduleType;
}

export interface SessionPayload {
  programLocationId: string;
  scheduleId?: string;
  date: Date;
  startTime: Date;
  endTime: Date;
  type: ScheduleType;
}

/**
 * Generates ProgramSession payloads for a given schedule over a date range.
 * Uses UTC throughout to avoid DST / server-timezone bugs.
 */
export function generateSessionsForSchedule(
  programLocationId: string,
  schedule: ScheduleInput,
  startDate: Date,
  endDate: Date,
): SessionPayload[] {
  const payloads: SessionPayload[] = [];
  const targetIsoDay = ISO_DAY_MAP[schedule.dayOfWeek];
  const schStart = new Date(schedule.startTime);

  for (
    let dt = new Date(startDate);
    dt <= endDate;
    dt.setUTCDate(dt.getUTCDate() + 1)
  ) {
    // getUTCDay() returns 0=Sun..6=Sat; convert to ISO 1..7
    const utcDay = dt.getUTCDay() === 0 ? 7 : dt.getUTCDay();
    if (utcDay !== targetIsoDay) continue;

    const sessionStart = new Date(dt);
    sessionStart.setUTCHours(
      schStart.getUTCHours(),
      schStart.getUTCMinutes(),
      0,
      0,
    );

    let sessionEnd: Date;
    if (schedule.endTime) {
      const schEnd = new Date(schedule.endTime);
      sessionEnd = new Date(dt);
      sessionEnd.setUTCHours(schEnd.getUTCHours(), schEnd.getUTCMinutes(), 0, 0);
    } else {
      sessionEnd = new Date(sessionStart.getTime() + schedule.duration * 60_000);
    }

    payloads.push({
      programLocationId,
      scheduleId: schedule.id,
      date: new Date(dt),
      startTime: sessionStart,
      endTime: sessionEnd,
      type: schedule.type,
    });
  }

  return payloads;
}
