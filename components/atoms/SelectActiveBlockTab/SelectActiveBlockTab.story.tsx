import React from 'react'
import { Story, Meta } from '@storybook/react'
import SelectActiveBlockTab from './SelectActiveBlockTab'
import { SelectActiveBlockTabProps } from '_types/data'

export default {
  title: 'Atoms/SelectActiveBlockTab',
  component: SelectActiveBlockTab,
} as Meta<SelectActiveBlockTabProps>

const Template: Story<SelectActiveBlockTabProps> = (args) => (
  <SelectActiveBlockTab {...args} />
)

export const Default = Template.bind({})
const SelectActiveBlockTabData: SelectActiveBlockTabProps = {
  blocks: ['a', 'e', 'c'],
  activeBlock: 'a',
  setActiveBlock: () => {},
}

Default.args = SelectActiveBlockTabData
