import { render } from '@testing-library/react'
import UkpnHeader, { HeaderProps } from './UkpnHeader'
import React from 'react'

const mockHeaderProps: HeaderProps = {
  imageDesktopUrl: "/images/g81/ukpn-logo-mobile@2x.jpg'",
  imageMobileUrl: "/images/g81/ukpn-logo-mobile.jpg'",
  isSchedule: true,
}

describe('Ukpn Header Test', () => {
  it('should render the Header', () => {
    const screen = render(<UkpnHeader {...mockHeaderProps} />)

    expect(
      screen.getByRole('link', {
        name: /logo/i,
      })
    ).toHaveAttribute('href', 'https://www.ukpowernetworks.co.uk')
  })
})
