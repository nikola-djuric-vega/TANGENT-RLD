import AddressLookUp, { AddressLookUpProps } from './AddressLookUp'
import { Story, Meta } from '@storybook/react'
import React from 'react'

export default {
  title: 'Atoms/AddressLookUp',
  component: AddressLookUp,
} as Meta

const Template: Story<AddressLookUpProps> = (args) => (
  <AddressLookUp {...args} />
)

export const Default = Template.bind({})
Default.args = {}
