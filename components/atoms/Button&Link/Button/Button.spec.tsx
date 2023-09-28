import { ButtonColors, ButtonAppearance } from '_types/CMS'
import { render } from '@testing-library/react'
import { ButtonProps } from './Button'
import Button from './Button'
import React from 'react'

const mockProps: ButtonProps = {
  children: 'Mock Children',
  color: ButtonColors.LIGHT,
  appearance: ButtonAppearance.PRIMARY,
  className: 'mock_class_name',
}

const mockProps2: ButtonProps = {
  children: true,
  color: ButtonColors.LIGHT,
  appearance: ButtonAppearance.BLANK,
  className: 'mock_class_name',
}

const mockProps3: ButtonProps = {
  children: true,
  color: ButtonColors.LIGHT,
  appearance: ButtonAppearance.DEFAULT,
  className: 'mock_class_name',
}

describe('Button Test', () => {
  it('should render button with children', () => {
    const screen = render(
      <Button {...mockProps} type="button">
        Test
      </Button>
    )

    const element = screen.getByText('Test')

    expect(element).toBeInTheDocument()
    expect(element).toHaveAttribute('class', 'buttonLink')
  })

  it('should render button with no children', () => {
    const screen = render(
      <Button {...mockProps2} type="button">
        Test
      </Button>
    )

    const element = screen.getByText('Test')

    expect(element).toBeInTheDocument()
  })

  it('should render button with default appearance', () => {
    const screen = render(
      <Button {...mockProps3} type="button">
        Test
      </Button>
    )

    const element = screen.getByText('Test')

    expect(element).toBeInTheDocument()
  })
})
