import React from 'react'
import { getByText, render } from '@testing-library/react'
import DesktopScheduleSidebar from './DesktopScheduleSidebar'

const sidebarProps = [
  '00:30',
  '03:30',
  '06:30',
  '09:30',
  '12:30',
  '15:30',
  '18:30',
  '21:30',
  '*00:30',
]

describe('Desktop Schedule Sidebar', () => {
  it('should render Desktop Schedule Sidebar', () => {
    const screen = render(<DesktopScheduleSidebar />)

    const element1 = screen.getByText(sidebarProps[0])
    const element2 = screen.getByText(sidebarProps[1])
    const element3 = screen.getByText(sidebarProps[2])
    const element4 = screen.getByText(sidebarProps[3])
    const element5 = screen.getByText(sidebarProps[4])
    const element6 = screen.getByText(sidebarProps[5])
    const element7 = screen.getByText(sidebarProps[6])
    const element8 = screen.getByText(sidebarProps[7])
    const element9 = screen.getByText(sidebarProps[8])

    expect(element1).toBeInTheDocument()
    expect(element2).toBeInTheDocument()
    expect(element3).toBeInTheDocument()
    expect(element4).toBeInTheDocument()
    expect(element5).toBeInTheDocument()
    expect(element6).toBeInTheDocument()
    expect(element7).toBeInTheDocument()
    expect(element8).toBeInTheDocument()
    expect(element9).toBeInTheDocument()
  })
})
