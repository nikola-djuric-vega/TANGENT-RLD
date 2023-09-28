import Heading, { HeadingProps } from './Heading'
import { Meta, Story } from '@storybook/react'
import React from 'react'

export default {
  title: 'Atoms/Heading',
  component: Heading,
  args: {
    children: 'The quick brown fox jumped over the lazy dog',
  },
} as Meta

export const All: Story<HeadingProps> = (args) => (
  <>
    <Heading level={1}>{`H1 ${args.children}`}</Heading>
    <Heading level={2}>{`H2 ${args.children}`}</Heading>
    <Heading level={3}>{`H3 ${args.children}`}</Heading>
    <Heading level={4}>{`H4 ${args.children}`}</Heading>
    <Heading level={5}>{`H5 ${args.children}`}</Heading>
    <Heading level={6}>{`H6 ${args.children}`}</Heading>
  </>
)
