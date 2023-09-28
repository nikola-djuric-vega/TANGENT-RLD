import { ComponentsTypeName, Link, Media } from '_types/CMS'
import { IconNames } from '_types/local'

export interface DoubleCtaNavIconImageType {
  __typename: ComponentsTypeName.NAV_ICON_ITEM
  leftTitle?: string
  leftText?: string
  leftImage?: Media
  leftIcon?: IconNames
  leftButtonLink?: Link
  rightTitle?: string
  rightText?: string
  rightImage?: Media
  rightIcon?: IconNames
  rightButtonLink?: Link
  removeBottomMargin?: boolean
}
