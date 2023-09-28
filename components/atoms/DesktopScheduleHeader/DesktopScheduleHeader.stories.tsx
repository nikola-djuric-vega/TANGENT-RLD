import React from 'react'
import { Story, Meta } from '@storybook/react'
import DesktopScheduleHeader from './DesktopScheduleHeader'
import { DesktopScheduleHeaderProps } from '_types/data'

export default {
  title: 'Atoms/DesktopScheduleCard',
  component: DesktopScheduleHeader,
} as Meta

const Template: Story<DesktopScheduleHeaderProps> = (args) => (
  <DesktopScheduleHeader {...args} />
)

export const Default = Template.bind({})

const DesktopScheduleHeaderData: DesktopScheduleHeaderProps = {
  date: 'Mock Day Start - Mock Day End Month',
  info: { firstOption: 'confirmed', secondOption: 'possible' },
}

Default.args = DesktopScheduleHeaderData
