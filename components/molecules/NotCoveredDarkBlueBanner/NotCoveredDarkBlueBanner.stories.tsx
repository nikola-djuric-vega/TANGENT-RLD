import NotCoveredDarkBlueBanner from './NotCoveredDarkBlueBanner'
import { Story, Meta } from '@storybook/react'
import React from 'react'
export default {
  title: 'Molecules/NotCoveredDarkBlueBanner',
  component: NotCoveredDarkBlueBanner,
} as Meta

const Template: Story = (args) => <NotCoveredDarkBlueBanner {...args} />

export const Default = Template.bind({})
Default.args = {}
