import React from 'react'
import { Story, Meta } from '@storybook/react'
import DesktopSchedule, {
  CompleteDesktopScheduleProps,
} from './DesktopSchedule'

export default {
  title: 'Organism/DesktopSchedule',
  component: DesktopSchedule,
} as Meta<CompleteDesktopScheduleProps>

const Template: Story<CompleteDesktopScheduleProps> = (args) => (
  <DesktopSchedule {...args} />
)

export const Default = Template.bind({})

export const DesktopScheduleData: CompleteDesktopScheduleProps = {
  weeklyScheduleData: [
    {
      confirmed: true,
      day: 'Monday',
      periods: ['06:30-09:30', '18:30-21:30'],
    },
    {
      confirmed: false,
      day: 'Tuesday',
      periods: [],
    },
    {
      confirmed: false,
      day: 'Wednesday',
      periods: ['03:30-06:30'],
    },
    {
      confirmed: false,
      day: 'Thursday',
      periods: ['06:30-09:30', '18:30-21:30'],
    },
    {
      confirmed: false,
      day: 'Friday',
      periods: ['03:30-06:30'],
    },
    {
      confirmed: true,
      day: 'Saturday',
      periods: ['06:30-09:30', '18:30-21:30'],
    },
    {
      confirmed: false,
      day: 'Sunday',
      periods: ['06:30-09:30', '18:30-21:30'],
    },
  ],
  desktopScheduleData: {
    date: 'Monday 19th - Sunday 25th',
    info: { firstOption: 'Confirmed', secondOption: 'Possible' },
  },
  blocks: ['a', 'b', 'c'],
  activeBlock: 'a',
  setActiveBlock: () => {},
}

Default.args = DesktopScheduleData
