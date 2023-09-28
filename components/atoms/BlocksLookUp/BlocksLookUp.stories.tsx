import BlocksLookUp, { BlocksLookUpProps } from './BlocksLookUp'
import { Story, Meta } from '@storybook/react'
import React from 'react'

export default {
  title: 'Atoms/BlocksLookUp',
  component: BlocksLookUp,
} as Meta

const Template: Story<BlocksLookUpProps> = (args) => <BlocksLookUp {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Select a block',
  buttonText: 'Already know your block?',
}
