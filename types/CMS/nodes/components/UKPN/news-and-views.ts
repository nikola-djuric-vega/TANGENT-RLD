import { NewsArticle } from '_types/CMS/pages/main-site-pages'
import { ComponentsTypeName } from '_types/CMS'

export interface NewsAndViews {
  __typename: ComponentsTypeName.NEWS_AND_VIEWS
  featuredArticle: NewsArticle
  title: string
}
