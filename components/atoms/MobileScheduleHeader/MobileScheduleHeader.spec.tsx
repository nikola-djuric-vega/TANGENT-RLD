import React from 'react'
import MobileScheduleHeader from './MobileScheduleHeader'
import { MobileScheduleHeaderProps } from '_types/data'
import { render } from '@testing-library/react'

const mockProps: MobileScheduleHeaderProps = {
  titleText: 'Block B schedule',
  subTitleText: 'Mon 19th Sept- Sun 25th Sept',
}

describe('MobileScheduleHeader', () => {
  it('should render Mobile Schedule Header', () => {
    const screen = render(<MobileScheduleHeader {...mockProps} />)

    const element1 = screen.getByText('Block B schedule')
    const element2 = screen.getByText('Mon 19th Sept- Sun 25th Sept')

    expect(element1).toBeInTheDocument()
    expect(element2).toBeInTheDocument()
  })
})
