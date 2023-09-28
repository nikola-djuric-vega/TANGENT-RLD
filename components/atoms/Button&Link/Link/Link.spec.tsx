import { ButtonColors, LinkAppearance } from '_types/CMS'
import { render } from '@testing-library/react'
import { LinkProps } from './Link'
import React from 'react'
import Link from './Link'

const mockProps1: LinkProps = {
  title: 'Mock Link Title',
  children: 'Mock Children',
  color: ButtonColors.LIGHT,
  appearance: LinkAppearance.PRIMARY,
  url: 'mockurlforlink/mock',
  skipUrlTransform: true,
  className: 'mock-class-name',
}

const mockProps2: LinkProps = {
  title: 'Mock Link Title',
  children: 'Mock Children',
  color: ButtonColors.LIGHT,
  appearance: LinkAppearance.BOXED,
  url: 'mockurlforlink/mock',
  skipUrlTransform: true,
  className: 'mock-class-name',
}

describe('Link Test', () => {
  it('should render primary link', () => {
    const screen = render(<Link {...mockProps1} />)

    const element = screen.getByText('Mock Children')

    expect(element).toBeInTheDocument()
  })

  it('should render boxed link', () => {
    const screen = render(<Link {...mockProps2} />)

    const element = screen.getByText('Mock Link Title')

    expect(element).toBeInTheDocument()
  })
})
