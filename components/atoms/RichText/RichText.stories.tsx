import RichText, { RichTextProps } from './RichText'
import { Story, Meta } from '@storybook/react'
import { TextSizes } from '_types/CMS'
import React from 'react'

export default {
  title: 'Atoms/RichText',
  component: RichText,
  argTypes: {
    size: { control: 'select' },
    text: { text: 'string' },
  },
  args: {
    size: TextSizes.TEXT_BODY_1,
    text: '',
  },
} as Meta

const Template: Story<RichTextProps> = (args) => <RichText {...args} />

export const Primary = Template.bind({})
Primary.args = {
  text: '<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1> <p>Provident asperiores, explicabo deserunt a cumque tempora. Corrupti quae ad, adipisci atque veritatis a, numquam maxime nesciunt consectetur tempore vel voluptates tenetur.</p>',
  size: TextSizes.TEXT_BODY_1,
}
