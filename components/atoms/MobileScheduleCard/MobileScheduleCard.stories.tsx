import React from 'react'
import { Story, Meta } from '@storybook/react'
import MobileScheduleCard from './MobileScheduleCard'
import { ScheduleCardProps } from '_types/data'

export default {
  title: 'Atoms/MobileScheduleCard',
  component: MobileScheduleCard,
} as Meta<ScheduleCardProps>

const Template: Story<ScheduleCardProps> = (args) => (
  <MobileScheduleCard {...args} />
)

export const Default = Template.bind({})
const MobileScheduleCardData: ScheduleCardProps = {
  confirmed: true,
  day: 'Monday 19th',
  periods: ['06:30-09:30', '18:30-21:30'],
}

Default.args = MobileScheduleCardData
