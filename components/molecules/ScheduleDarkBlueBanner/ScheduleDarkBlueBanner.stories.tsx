import React from 'react'
import { Meta, Story } from '@storybook/react'
import ScheduleDarkBlueBanner from './ScheduleDarkBlueBanner'
import { ScheduleDarkBlueBannerProps } from '_types/data'

export default {
  title: 'Molecules/ScheduleDarkBlueBanner',
  component: ScheduleDarkBlueBanner,
} as Meta

const Template: Story<ScheduleDarkBlueBannerProps> = (args) => {
  return <ScheduleDarkBlueBanner {...args} />
}

export const Primary = Template.bind({})

Primary.args = {
  bannerTitle: 'Mock Title',
  bannerText:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, commodi.',
}
