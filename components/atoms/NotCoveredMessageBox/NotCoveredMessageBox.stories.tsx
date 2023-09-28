import NotCoveredMessageBox from './NotCoveredMessageBox'
import { Story, Meta } from '@storybook/react'
import React from 'react'
export default {
  title: 'Atoms/NotCoveredMessageBox',
  component: NotCoveredMessageBox,
} as Meta

const Template: Story = (args) => <NotCoveredMessageBox {...args} />

export const Default = Template.bind({})
Default.args = {}
