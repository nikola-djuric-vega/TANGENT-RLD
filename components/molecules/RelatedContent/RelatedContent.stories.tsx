import { Story, Meta } from '@storybook/react'
import RelatedContent from './RelatedContent'
import React from 'react'

import {
  RelatedContentType,
  ModuleColors,
} from '_types/CMS/nodes/components/UKPN'

import {
  ComponentsTypeName,
  LinkAppearance,
  ButtonColors,
  LinkType,
} from '_types/CMS'

export default {
  title: 'Molecules/RelatedContent',
  component: RelatedContent,
} as Meta<RelatedContentType>

const Template: Story<RelatedContentType> = (args) => (
  <RelatedContent {...args} />
)

export const Default = Template.bind({})
export const RelatedContentData: RelatedContentType = {
  __typename: ComponentsTypeName.RELATED_CONTENT,
  moduleColor: ModuleColors.DEFAULT,
  links: [
    {
      serviceTitle: 'Need help?',
      serviceCopyText:
        'Read our help and advice on installing Electric Vehicle Charging Points.',
      cTAButton: [
        {
          __typename: LinkAppearance.SECONDARY,
          uRL: {
            type: LinkType.EXTERNAL,
            url: 'http://delfi.com',
            name: 'Read now',
          },
          cTAType: ButtonColors.DARK,
        },
      ],
    },
  ],
}
Default.args = RelatedContentData
