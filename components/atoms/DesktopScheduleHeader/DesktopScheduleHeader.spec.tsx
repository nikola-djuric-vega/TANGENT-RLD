import React from 'react'
import { render } from '@testing-library/react'
import DesktopScheduleHeader from './DesktopScheduleHeader'
import { DesktopScheduleHeaderProps } from '_types/data'

const mockProps: DesktopScheduleHeaderProps = {
  date: 'Mock Day Start - Mock Day End Month',
  info: { firstOption: 'confirmed', secondOption: 'possible' },
}

describe('Desktop Schedule Header', () => {
  it('should render Desktop Schedule Header', () => {
    const screen = render(<DesktopScheduleHeader {...mockProps} />)

    const element1 = screen.getByRole('heading', {
      name: 'Mock Day Start - Mock Day End Month',
    })
    const element2 = screen.getByText(/confirmed/i)
    const element3 = screen.getByText(/possible/i)

    expect(element1).toBeInTheDocument()
    expect(element2).toBeInTheDocument()
    expect(element3).toBeInTheDocument()
  })
})
