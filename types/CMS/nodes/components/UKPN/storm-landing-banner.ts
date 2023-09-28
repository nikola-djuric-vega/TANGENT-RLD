import { ComponentsTypeName, Media } from '_types/CMS'
import { CardListItem } from './card-list-item'

export interface StormLandingBannerType {
  __typename: ComponentsTypeName.STORM_LANDING_BANNER
  backgroundImage?: Media
  title?: string
  updatedTime?: string
  summary?: string
  powerOffTitle?: string
  powerOffSubtitle?: string
  links?: CardListItem[]
}
