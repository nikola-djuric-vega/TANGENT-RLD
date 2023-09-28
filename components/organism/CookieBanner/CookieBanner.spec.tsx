import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import CookieBanner from './CookieBanner'

const cookieText = `Some of these are necessary, while others allow us to enhance your experience, personalise content and ads (across your devices), and provide insights into how the site is being used. For the full details of each of the cookies we use please see our Cookie Policy. Our recommended settings are that these cookies are all active but if you aren't happy with this you can manage your preferences by clicking Customise Cookie Settings.`

describe('CookieBanner', () => {
  it('should render CookieBanner component', () => {
    const mockClick = jest.fn()
    const mockClickDeny = jest.fn()

    const { getByText } = render(
      <CookieBanner
        visible={true}
        handleAgree={mockClick}
        handleDeny={mockClickDeny}
      />
    )

    expect(screen.getByText(cookieText)).toBeTruthy()

    fireEvent.click(getByText('Accept'))
    fireEvent.click(getByText('Reject'))
    expect(mockClick.mock.calls.length).toBe(1)
    expect(mockClickDeny.mock.calls.length).toBe(1)
  })

  it('should not render CookieBanner component', () => {
    const mockClick = jest.fn()
    const mockClickDeny = jest.fn()
    const { container } = render(
      <CookieBanner
        visible={false}
        handleAgree={mockClick}
        handleDeny={mockClickDeny}
      />
    )

    expect(container.firstChild).toHaveClass('hidden')
  })
})
