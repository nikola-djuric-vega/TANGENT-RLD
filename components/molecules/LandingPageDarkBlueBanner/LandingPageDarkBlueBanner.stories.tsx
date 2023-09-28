import LandingPageDarkBlueBanner from './LandingPageDarkBlueBanner'
import { Story, Meta } from '@storybook/react'
import React from 'react'

export default {
  title: 'Molecules/LandingPageDarkBlueBanner',
  component: LandingPageDarkBlueBanner,
} as Meta

const Template: Story = (args) => <LandingPageDarkBlueBanner {...args} />

export const Default = Template.bind({})
Default.args = {}
