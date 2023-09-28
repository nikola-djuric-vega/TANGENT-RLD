import { Dispatch, SetStateAction } from 'react'

interface LandingPageData {
  blueHeader: string
  blueSearchPlaceholder: string
  blueBlockButton: string
  lightBlueHeader: string
  lightBlueBody: string
  lightBlueButton: string
}

export interface ScheduleDarkBlueBannerProps {
  bannerTitle?: string
  bannerText?: string
  linkInfo?: { text: string; href: string }
}

export interface SelectActiveBlockTabProps {
  blocks?: string[]
  activeBlock?: string
  setActiveBlock: Dispatch<SetStateAction<string | undefined>>
  isMobile?: boolean
}

export interface ScheduleCardProps {
  confirmed: boolean
  day: string
  periods: string[]
}

export interface MobileScheduleHeaderProps {
  titleText: string
  subTitleText: string
}

export interface MobileScheduleProps {
  mobileScheduleData: MobileScheduleHeaderProps
  weeklyScheduleData?: ScheduleCardProps[]
}

export interface DesktopScheduleHeaderInfoProps {
  firstOption: string
  secondOption: string
}

export interface DesktopScheduleHeaderProps {
  date: string
  info: DesktopScheduleHeaderInfoProps
}

export interface DesktopScheduleProps {
  desktopScheduleData: DesktopScheduleHeaderProps
  weeklyScheduleData?: ScheduleCardProps[]
}

export interface ContextData extends MobileScheduleProps, DesktopScheduleProps {
  landingPageData: LandingPageData
}

export interface BlobData {
  block: string
  status: string
  period: string
  date: string
}

export interface ScheduleMonths {
  startOfWeekMonth: string
  endOfWeekMonth: string
}
