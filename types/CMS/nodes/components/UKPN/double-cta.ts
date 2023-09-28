import { ComponentsTypeName } from '_types/CMS'
import { CTAButton } from './buttons/base'

export interface DoubleCTAType {
  __typename: ComponentsTypeName.DOUBLE_CTA
  leftCTATitle?: string
  leftCTAText?: string
  leftCTAs?: CTAButton[]
  rightCTATitle?: string
  rightCTAText?: string
  rightCTAs?: CTAButton[]
  removeBottomMargin?: boolean
}
