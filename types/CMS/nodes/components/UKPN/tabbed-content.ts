import { ComponentsTypeName, Media } from '_types/CMS'
import { CTAButton } from './buttons/base'
import { IconNames } from '_types/local'

export interface TabbedContentType {
  __typename: ComponentsTypeName.TABBED_CONTENT
  moduleTitle?: string
  tabbedContentItems?: TabbedContentItemType[]
  removeBottomMargin?: boolean
}

export interface TabbedContentItemType {
  title?: string
  titleIcon?: IconNames
  rightTitle?: string
  rightText?: string
  rightMobileImage?: Media
  rightTabletImage?: Media
  rightDesktopImage?: Media
  backgroundIcon?: IconNames
  videoID?: string
  videoText?: string
  buttons?: CTAButton[]
}
