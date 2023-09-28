import { ComponentsTypeName, Media } from '_types/CMS'
import { IconNames } from '_types/local'
import { CTAButton } from './buttons/base'

export interface CtaFullWidthOffsetType {
  __typename: ComponentsTypeName.CTA_FULL_WIDTH_OFFSET
  icon?: IconNames
  title?: string
  text?: string
  cTA?: CTAButton[]
  image?: Media
  removeBottomMargin?: boolean
}
