import React from 'react'
import { render } from '@testing-library/react'
import DesktopScheduleCard from './DesktopScheduleCard'
import { ScheduleCardProps } from '_types/data'

const mockProps: ScheduleCardProps = {
  confirmed: true,
  day: 'Mock Day 02nd',
  periods: ['00:30-03:30', '18:30-21:30'],
}

describe('Desktop Schedule Card', () => {
  it('should render Desktop Schedule Card', () => {
    const screen = render(<DesktopScheduleCard {...mockProps} />)

    const element1 = screen.getByText('Mock Day 02nd')
    const element2 = screen.getByText('(Confirmed)')
    const element3 = screen.getByText('00:30-03:30')
    const element4 = screen.getByText('18:30-21:30')

    expect(element1).toBeInTheDocument()
    expect(element2).toBeInTheDocument()
    expect(element3).toBeInTheDocument()
    expect(element4).toBeInTheDocument()
  })
})
