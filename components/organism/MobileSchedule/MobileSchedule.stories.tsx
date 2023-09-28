import React from 'react'
import { Story, Meta } from '@storybook/react'
import MobileSchedule from './MobileSchedule'
import { CompleteMobileScheduleProps } from './MobileSchedule'

export default {
  title: 'Organism/MobileSchedule',
  component: MobileSchedule,
} as Meta<CompleteMobileScheduleProps>

const Template: Story<CompleteMobileScheduleProps> = (args) => (
  <MobileSchedule {...args} />
)

export const Default = Template.bind({})

export const MobileScheduleData: CompleteMobileScheduleProps = {
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
  mobileScheduleData: {
    titleText: 'Block B Schedule',
    subTitleText: 'Mon 19th Sept- Sun 25th Sept',
  },
  blocks: ['a', 'b', 'c'],
  activeBlock: 'a',
  setActiveBlock: () => {},
}

Default.args = MobileScheduleData
