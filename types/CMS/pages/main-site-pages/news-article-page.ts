import {
  BreadcrumbsItem,
  CorePageProperties,
  Media,
  PageTypeNames,
} from '../..'
import {
  LandingHeroBannerType,
  SubNavigationType,
  UsefulLinksType,
  ContactUsType,
  TableType,
} from '_types/CMS/nodes/components/UKPN'

//Add all components used only on NewsArticle
export type NewsArticleComponents =
  | LandingHeroBannerType
  | SubNavigationType
  | UsefulLinksType
  | ContactUsType
  | TableType

export interface NewsArticle extends CorePageProperties {
  __typename: PageTypeNames.NEWS_ARTICLE
  components?: NewsArticleComponents[]
  ancestors: {
    items: BreadcrumbsItem[]
  }
  publishedDate: string
  pageSubtitle: string
  desktopImage: Media
  tabletImage?: Media
  mobileImage?: Media
  subhead: string
  image?: Media
  video: string
  name: string
  url: string
  id: string
}

export interface NewsArticleAPI {
  imageUrl?: string
  nodeId: string
  publishedDate: string
  subheading: string
  videoUrl: string
  pageTitle: string
  path: string
}
