import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import CookieBanner from './CookieBanner'

export default {
  title: 'Organisms/CookieBanner',
  component: CookieBanner,
} as ComponentMeta<typeof CookieBanner>

const Template: ComponentStory<typeof CookieBanner> = (args) => (
  <CookieBanner
    {...args}
    handleAgree={() => console.log('user has agreed')}
    handleDeny={() => console.log('user has denied')}
  />
)

export const Default = Template.bind({})
Default.args = {
  visible: true,
}
