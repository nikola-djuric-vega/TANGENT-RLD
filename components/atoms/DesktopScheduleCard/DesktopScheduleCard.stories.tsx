import React from 'react'
import { Story, Meta } from '@storybook/react'
import DesktopScheduleCard from './DesktopScheduleCard'
import { ScheduleCardProps } from '_types/data'

export default {
  title: 'Atoms/DesktopScheduleCard',
} as Meta<ScheduleCardProps>

const Template: Story<ScheduleCardProps> = (args) => (
  <DesktopScheduleCard {...args} />
)

export const Default = Template.bind({})

const DesktopScheduleCardData: ScheduleCardProps = {
  confirmed: true,
  day: 'Wednesday 02nd',
  periods: ['06:30-09:30', '18:30-21:30'],
}

Default.args = DesktopScheduleCardData
