import { ComponentsTypeName, Link } from '_types/CMS'
import { IconNames } from '_types/local'

export interface TextBoxWithCTAType {
  __typename: ComponentsTypeName.TEXT_BOX_WITH_CTA
  leftTitle: string
  leftButtonLink?: Link
  leftIcon?: IconNames
  leftText?: string
  leftBackgroundColour?: BackgroundColours
  rightTitle?: string
  rightText?: string
  rightIcon?: IconNames
  rightButtonLink?: Link
  rightBackgroundColour?: BackgroundColours
  removeBottomMargin?: boolean
}

export enum BackgroundColours {
  DEFAULT = '',
  OCEAN_BLUE = 'ocean-blue',
  MIDNIGHT_BLUE = 'midnight-blue',
}
