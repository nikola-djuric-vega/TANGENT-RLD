import { CorePageProperties, PageTypeNames } from '_types/CMS/base'
import { Media } from '_types/CMS/media'

export interface PowerCutChecks extends CorePageProperties {
  __typename: PageTypeNames.POWER_CUT_CHECKS
  rightSteps: PowerCutStep[]
  leftSteps: PowerCutStep[]
  smartMeterImage: Media
  rightHeading: string
  leftHeading: string
  rightImage: Media
  leftImage: Media
  rightCTA: string
  leftCTA: string
  title: string
  overlayLeftTitle: string
  overlayRightTitle: string
}

export interface PowerCutStep {
  images: Media[]
  title: string
  text: string
}
