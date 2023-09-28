import { ComponentsTypeName, Link, Media } from '_types/CMS'
import { CTAButton } from '_types/CMS/nodes/components/UKPN/buttons/base'

export interface LandingHeroBannerType {
  __typename: ComponentsTypeName.LANDING_HERO_BANNER
  headering: string
  subHeading?: string
  image?: Media
  anchorPanelTitle?: string
  anchorLinks?: Link[]
  actionPanelTitle?: string
  actionPanelLinks?: CTAButton[]
  connectionsBox?: string
  amendBackgroundIcon?: boolean
  removeBottomMargin?: boolean
}
