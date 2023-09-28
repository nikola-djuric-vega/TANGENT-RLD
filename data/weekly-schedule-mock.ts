import { ScheduleCardProps } from '_types/data'

export const weeklyScheduleData: ScheduleCardProps[] = [
  {
    confirmed: true,
    day: 'Monday 19th',
    periods: ['06:30-09:30', '18:30-21:30'],
  },
  {
    confirmed: false,
    day: 'Tuesday 20th',
    periods: [],
  },
  {
    confirmed: false,
    day: 'Wednesday 21th',
    periods: ['03:30-06:30'],
  },
  {
    confirmed: false,
    day: 'Thursday 22th',
    periods: ['06:30-09:30', '18:30-21:30'],
  },
  {
    confirmed: false,
    day: 'Friday 23th',
    periods: ['03:30-06:30'],
  },
  {
    confirmed: true,
    day: 'Saturday 24th',
    periods: ['06:30-09:30', '18:30-21:30'],
  },
  {
    confirmed: false,
    day: 'Sunday 25th',
    periods: ['06:30-09:30', '18:30-21:30'],
  },
]
