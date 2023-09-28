import {
  LandingHeroBannerType,
  SubNavigationType,
  RelatedContentType,
  ContactUsType,
} from '_types/CMS/nodes/components/UKPN'
import { ArticleItemsAPI } from '_types/local'
import { BreadcrumbsItem, CorePageProperties, PageTypeNames } from '../..'

//Add all components used only on NewsListing
export type NewsListingComponents =
  | LandingHeroBannerType
  | SubNavigationType
  | RelatedContentType
  | ContactUsType

export interface NewsListing extends CorePageProperties {
  __typename: PageTypeNames.NEWS_LISTING
  ancestors: {
    items: BreadcrumbsItem[]
  }
  name: string
  url: string
  components: NewsListingComponents[]
  articles: ArticleItemsAPI
}
