import LandingPageLightBlueBanner from './LandingPageLightBlueBanner'
import { Story, Meta } from '@storybook/react'
import React from 'react'

export default {
  title: 'Molecules/LandingPageLightBlueBanner',
  component: LandingPageLightBlueBanner,
} as Meta

const Template: Story = (args) => <LandingPageLightBlueBanner {...args} />

export const Default = Template.bind({})
Default.args = {}
