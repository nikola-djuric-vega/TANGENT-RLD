import React from 'react'
import LandingPageLightBlueBanner from './LandingPageLightBlueBanner'
import { render } from '@testing-library/react'

const mockData = {
  lightBlueHeader: 'What is a power cut rotation schedule?',
  lightBlueBody:
    'If a prolonged electricity shortage affects a specific region, or the whole country, electricity rationing may be necessary.',
  lightBlueButton: 'Find out more',
}

describe('LandingPageDarkBlueBanner', () => {
  it('should render Landing Page Light Blue Banner', () => {
    const screen = render(<LandingPageLightBlueBanner />)

    const elementHeader = screen.getByText(mockData.lightBlueHeader)
    const elementBody = screen.getByText(mockData.lightBlueBody)
    const elementButton = screen.getByText(mockData.lightBlueButton)

    expect(elementHeader).toBeInTheDocument()
    expect(elementBody).toBeInTheDocument()
    expect(elementButton).toBeInTheDocument()
  })
})
