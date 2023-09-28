import { Components, CorePageProperties, PageTypeNames } from '..'
import {
  HomePageHeroBannerSlideImageType,
  HomePageHeroSlideParallaxType,
} from '../nodes/components/UKPN'

export interface UkpnHomepage extends CorePageProperties {
  __typename: PageTypeNames.UKPN_HOMEPAGE
  components: Components[]
  slides: Array<
    HomePageHeroBannerSlideImageType | HomePageHeroSlideParallaxType
  >
  name: string
  url: string
}
