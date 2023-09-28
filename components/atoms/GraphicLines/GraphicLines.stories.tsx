import GraphicLines, { LinesPosition, GraphicLinesProps } from './GraphicLines'
import { Story, Meta } from '@storybook/react'
import React from 'react'

export default {
  title: 'Atoms/GraphicLines',
  component: GraphicLines,
} as Meta

const Template: Story<GraphicLinesProps> = (args) => (
  <GraphicLines {...args}></GraphicLines>
)

export const Primary = Template.bind({})
Primary.args = {
  position: LinesPosition.TOP,
}
