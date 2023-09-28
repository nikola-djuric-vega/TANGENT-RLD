import { ButtonColors, ButtonAppearance } from '_types/CMS'
import { Meta, Story } from '@storybook/react'
import Button, { ButtonProps } from './Button'
import { IconNames } from '_types/local'
import Icon from '_atoms/Icon/Icon'
import React from 'react'

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    appearance: { control: 'select' },
    color: { control: 'select' },
    children: { text: 'string' },
  },
  args: {
    children: 'Find out more',
    appearance: ButtonAppearance.PRIMARY,
    color: ButtonColors.LIGHT,
  },
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  appearance: ButtonAppearance.PRIMARY,
  color: ButtonColors.DARK,
  disabled: false,
}

export const Secondary = Template.bind({})
Secondary.args = { appearance: ButtonAppearance.SECONDARY, disabled: false }

export const Expandable = Template.bind({})
Expandable.args = { appearance: ButtonAppearance.EXPANDABLE, disabled: false }

export const Back = Template.bind({})
Back.args = { appearance: ButtonAppearance.BACK, disabled: false }

export const Video = Template.bind({})
Video.args = { appearance: ButtonAppearance.VIDEO, disabled: false }

export const WithIcon = Template.bind({})
WithIcon.args = {
  appearance: ButtonAppearance.BLANK,
  children: <Icon name={IconNames.SIXTEEN_PX_CHEVRON_DOWN} size="md" />,
}
