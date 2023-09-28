import React from 'react'
import NotCoveredMessageBox from './NotCoveredMessageBox'
import { render } from '@testing-library/react'

const mockData = {
  darkBlueHeading: 'Your postcode is not part of our schedule',
  darkBlueTitle: 'This may be for one of the following reasons:',
  darkBlueTextOne:
    'We’re not your network operator. You can visit energynetworks.org to find out who your network operator is, and then check with them if they’re operating a similar type of schedule.',
  darkBlueTextTwo:
    'Your postcode is part of a new build and hasn’t yet been added to our database.',
}

describe('NotCoveredMessageBox', () => {
  it('should render Not Covered Message Box', () => {
    const screen = render(<NotCoveredMessageBox />)

    const elementHeading = screen.getByText(mockData.darkBlueHeading)
    const elementTitle = screen.getByText(mockData.darkBlueTitle)
    const elementWithLink = screen.getByRole('link', {
      name: /energynetworks\.org/i,
    })
    const elementWithPlainText = screen.getByText(mockData.darkBlueTextTwo)

    expect(elementHeading).toBeInTheDocument()
    expect(elementTitle).toBeInTheDocument()
    expect(elementWithLink).toHaveAttribute(
      'href',
      'http://energynetowrks.org/'
    )
    expect(elementWithPlainText).toBeInTheDocument()
  })
})
