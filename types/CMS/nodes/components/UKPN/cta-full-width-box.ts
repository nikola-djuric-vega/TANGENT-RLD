import { ComponentsTypeName } from '_types/CMS'
import { CTAButton } from './buttons/base'

export interface CtaFullWidthBoxType {
  __typename: ComponentsTypeName.CTA_FULL_WIDTH_BOX
  cTAItems?: CTAFullWidthItem[]
  removeBottomMargin?: boolean
}

export interface CTAFullWidthItem {
  title?: string
  text?: string
  cTAFullWidthItemCTA?: CTAButton[]
}
