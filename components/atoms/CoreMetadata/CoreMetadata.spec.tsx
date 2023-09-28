import { CmsPage, Components, PageTypeNames } from '_types/CMS'
import { render } from '@testing-library/react'
import CoreMetadata from './CoreMetadata'
import React from 'react'

import {
  HomePageHeroBannerSlideImageType,
  HomePageHeroSlideParallaxType,
} from '_types/CMS/nodes/components/UKPN'

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: function Head({
      children,
    }: {
      children: Array<React.ReactElement>
    }) {
      return <>{children}</>
    },
  }
})

const mockData: CmsPage = {
  __typename: PageTypeNames.UKPN_HOMEPAGE,
  name: 'Home Page',
  url: '/home-page/',
  seoDescription: 'Meta Description',
  hideFromSearchEngines: true,
  pageTitle: 'Mock Homepage Title',
  id: '43fb8d0e-ddf0-48ef-8296-07059f9293ba',
  contentTypeAlias: 'homePage',
  components: [] as Components[],
  slides: [] as (
    | HomePageHeroBannerSlideImageType
    | HomePageHeroSlideParallaxType
  )[],
}

describe('CoreMetadata', () => {
  it('should render metadata', async () => {
    const screen = render(<CoreMetadata data={mockData} />)

    const element = screen.getByText('Mock Homepage Title')

    expect(element).toBeInTheDocument()
  })
})
