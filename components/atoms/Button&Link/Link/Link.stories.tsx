import { ButtonColors, LinkAppearance } from '_types/CMS'
import { Meta, Story } from '@storybook/react'
import Link, { LinkProps } from './Link'
import { IconNames } from '_types/local'
import Icon from '../../Icon/Icon'
import React from 'react'

export default {
  title: 'Atoms/Link',
  component: Link,
  argTypes: {
    appearance: { control: 'select' },
    color: { control: 'select' },
    children: { text: 'string' },
  },
  args: {
    children: 'Find out more',
    appearance: LinkAppearance.PRIMARY,
    color: ButtonColors.LIGHT,
    url: '/news',
  },
} as Meta

const Template: Story<LinkProps> = (args) => <Link {...args} />

export const Primary = Template.bind({})
Primary.args = {
  appearance: LinkAppearance.PRIMARY,
  color: ButtonColors.DARK,
}

export const Secondary = Template.bind({})
Secondary.args = { appearance: LinkAppearance.SECONDARY }

export const Tertiary = Template.bind({})
Tertiary.args = { appearance: LinkAppearance.TERTIARY }

export const Download = Template.bind({})
Download.args = { appearance: LinkAppearance.DOWNLOAD }

export const Login = Template.bind({})
Login.args = { appearance: LinkAppearance.LOGIN }

export const Back = Template.bind({})
Back.args = { appearance: LinkAppearance.BACK }

export const Boxed = Template.bind({})
Boxed.args = { appearance: LinkAppearance.BOXED, title: 'This is boxed title' }

export const External = Template.bind({})
External.args = {
  appearance: LinkAppearance.PRIMARY,
  url: 'https://www.google.com/',
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  appearance: LinkAppearance.BLANK,
  children: <Icon name={IconNames.SIXTEEN_PX_CHEVRON_DOWN} size="md" />,
}
