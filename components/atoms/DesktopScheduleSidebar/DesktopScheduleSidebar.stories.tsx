import React from 'react'
import { Story, Meta } from '@storybook/react'
import DesktopScheduleSidebar from './DesktopScheduleSidebar'

export default {
  title: 'Atoms/MobileScheduleCard',
  component: DesktopScheduleSidebar,
} as Meta

const Template = () => <DesktopScheduleSidebar />

export const Default = Template.bind({})
