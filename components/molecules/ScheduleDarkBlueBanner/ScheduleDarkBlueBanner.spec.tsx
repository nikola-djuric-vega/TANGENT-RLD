import React from 'react'
import { render } from '@testing-library/react'
import ScheduleDarkBlueBanner from './ScheduleDarkBlueBanner'
import { ScheduleDarkBlueBannerProps } from '_types/data'

const mockBannerProps: ScheduleDarkBlueBannerProps = {
  bannerTitle: 'Mock Block Schedule',
  bannerText: 'Mock banner text that explains it all',
}

describe('Schedule Dark Blue Banner', () => {
  it('should render Schedule Banner', () => {
    const screen = render(<ScheduleDarkBlueBanner {...mockBannerProps} />)

    const element1 = screen.getByText(/mock block schedule/i)
    const element2 = screen.getByText(/mock banner text that explains it all/i)

    expect(element1).toBeInTheDocument()
    expect(element2).toBeInTheDocument()
  })
})
