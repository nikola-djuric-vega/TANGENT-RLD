import { ComponentsTypeName, Link } from '_types/CMS'
import { IconNames } from '_types/local'

export interface HelpAndAdviceType {
  __typename: ComponentsTypeName.HELP_AND_ADVICE
  helpAndAdviceTitle?: string
  helpAndAdviceItems?: (HelpAndAdviceItemType | WrappedHelpAndAdviceItemType)[]
  helpAndAdviceEnableAlwaysOpen?: boolean
  removeBottomMargin?: boolean
  viewMore?: Link
}

export interface HelpAndAdviceItemType {
  helpAndAdviceItemTitle?: string
  helpAndAdviceTitleIcon?: IconNames
  helpAndAdviceDescription?: string
  helpAndAdviceImage?: { name: string; umbracoFile: { url: string } }
  helpAndAdviceImageOverlay?: string
  helpAndAdviceImageOverlayIcon?: IconNames
  helpAndAdviceVideo?: string
  helpAndAdviceVideoPlayText?: string
}

export interface WrappedHelpAndAdviceItemType {
  item?: HelpAndAdviceItemType
}
