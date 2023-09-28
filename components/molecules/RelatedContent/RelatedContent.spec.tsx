import React from 'react'
import RelatedContent from './RelatedContent'
import { render } from '@testing-library/react'
import {
  ComponentsTypeName,
  LinkAppearance,
  LinkType,
  ButtonColors,
} from '_types/CMS'
import {
  ModuleColors,
  RelatedContentType,
} from '_types/CMS/nodes/components/UKPN'

const mockProps: RelatedContentType = {
  __typename: ComponentsTypeName.RELATED_CONTENT,
  moduleColor: ModuleColors.DEFAULT,
  links: [
    {
      serviceTitle: 'Mock Service Title 1',
      serviceCopyText: 'Mock Service Text 1',
      cTAButton: [
        {
          __typename: LinkAppearance.PRIMARY,
          uRL: {
            __typename: 'mock_type1',
            name: 'Mock Related Link 1',
            type: LinkType.CONTENT,
            url: 'mock/relatedcontent/url1',
          },
          cTAType: ButtonColors.LIGHT,
        },
      ],
    },
    {
      serviceTitle: 'Mock Service Title 2',
      serviceCopyText: 'Mock Service Text 2',
      cTAButton: [
        {
          __typename: LinkAppearance.SECONDARY,
          uRL: {
            __typename: 'mock_type2',
            name: 'Mock Related Link 2',
            type: LinkType.CONTENT,
            url: 'mock/relatedcontent/url2',
          },
          cTAType: ButtonColors.LIGHT,
        },
      ],
    },
  ],
}

describe('Related Content', () => {
  it('should render Related Content', () => {
    const screen = render(<RelatedContent {...mockProps} />)

    const element2 = screen.getByText('Mock Service Title 1')
    const element3 = screen.getByText('Mock Related Link 1')
    const element4 = screen.getByText('Mock Related Link 2').closest('a')

    expect(element2).toBeInTheDocument()
    expect(element3).toBeInTheDocument()
    expect(element4).toHaveAttribute('href', '/mock/relatedcontent/url2')
  })
})
