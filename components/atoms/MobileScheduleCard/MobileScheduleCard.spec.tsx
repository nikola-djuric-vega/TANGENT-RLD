import React from 'react'
import { render } from '@testing-library/react'
import MobileScheduleCard from './MobileScheduleCard'
import { ScheduleCardProps } from '_types/data'

const mockProps: ScheduleCardProps = {
  confirmed: true,
  day: 'Mock Day 20th',
  periods: ['00:30-03:30', '18:30-21:30'],
}

describe('Mobile Schedule Card', () => {
  it('should render Mobile Schedule Card', () => {
    const screen = render(<MobileScheduleCard {...mockProps} />)

    const element1 = screen.getByRole('heading', {
      name: 'Mock Day 20th (Confirmed)',
    })
    const element2 = screen.getByText('00:30-03:30')
    const element3 = screen.getByText('18:30-21:30')

    expect(element1).toBeInTheDocument()
    expect(element2).toBeInTheDocument()
    expect(element3).toBeInTheDocument()
  })
})
