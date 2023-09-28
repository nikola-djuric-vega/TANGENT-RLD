import { Meta, Story } from '@storybook/react'
import UkpnHeader, { HeaderProps } from './UkpnHeader'
import React from 'react'

export default {
  title: 'Molecules/UkpnHeader',
  component: UkpnHeader,
} as Meta

const Template: Story<HeaderProps> = (args) => {
  return <UkpnHeader {...args}></UkpnHeader>
}

export const Primary = Template.bind({})
Primary.args = {
  imageDesktopUrl: '/images/g81/ukpn-logo-mobile@2x.jpg',
  imageMobileUrl: '/images/g81/ukpn-logo-mobile.jpg',
  isSchedule: true,
}
