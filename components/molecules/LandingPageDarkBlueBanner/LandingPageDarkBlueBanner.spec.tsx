import React from 'react'
import LandingPageDarkBlueBanner from './LandingPageDarkBlueBanner'
import { render } from '@testing-library/react'

const mockData = {
  blueHeader: 'Power cut rotation schedule',
  blueSearchPlaceholder: 'Search schedule by postcode',
  blueBlockButton: 'Already know your block?',
}

describe('LandingPageDarkBlueBanner', () => {
  it('should render Landing Page Dark Blue Banner', () => {
    const screen = render(<LandingPageDarkBlueBanner />)

    const elementHeader = screen.getByText(mockData.blueHeader)
    const elementWithPlaceholder = screen.getByPlaceholderText(
      mockData.blueSearchPlaceholder
    )
    const elementButton = screen.getByText(mockData.blueBlockButton)

    expect(elementHeader).toBeInTheDocument()
    expect(elementWithPlaceholder).toBeInTheDocument()
    expect(elementButton).toBeInTheDocument()
  })
})
