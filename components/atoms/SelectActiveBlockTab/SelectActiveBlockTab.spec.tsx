import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import SelectActiveBlockTab from './SelectActiveBlockTab'
import { SelectActiveBlockTabProps } from '_types/data'

const mockProps: SelectActiveBlockTabProps = {
  blocks: ['a', 'e', 'c'],
  activeBlock: 'a',
  setActiveBlock: jest.fn(),
}

describe('Select Active Block Tab', () => {
  it('should render Select Active Block Tab', () => {
    const screen = render(<SelectActiveBlockTab {...mockProps} />)
    const elements = screen.getAllByRole('button')

    expect(elements).toHaveLength(3)
  })

  it('should have a class active', () => {
    const screen = render(<SelectActiveBlockTab {...mockProps} />)
    const element = screen.getByRole('button', { name: 'Block A' })

    expect(element).toHaveClass('active')
  })

  it('should execute function on click', () => {
    const screen = render(<SelectActiveBlockTab {...mockProps} />)
    const element = screen.getByRole('button', { name: 'Block E' })
    fireEvent.click(element)

    expect(mockProps.setActiveBlock).toHaveBeenCalled()
  })
})
