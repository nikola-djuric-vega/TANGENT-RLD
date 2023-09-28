import MobileScheduleHeader from './MobileScheduleHeader'
import { MobileScheduleHeaderProps } from '_types/data'
import { Meta, Story } from '@storybook/react'
import React from 'react'

export default {
  title: 'Atoms/MobileScheduleHeader',
  component: MobileScheduleHeader,
} as Meta

const Template: Story<MobileScheduleHeaderProps> = (args) => (
  <MobileScheduleHeader {...args} />
)

export const Default = Template.bind({})
const MobileScheduleHeaderData: MobileScheduleHeaderProps = {
  titleText: 'Block B schedule',
  subTitleText: 'Mon 19th Sept- Sun 25th Sept',
}

Default.args = MobileScheduleHeaderData
