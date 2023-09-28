import { NewsArticle, NewsArticleAPI } from '_types/CMS/pages/main-site-pages'

export interface ArticleItems {
  data: NewsArticle[]
  documentCount: number
  pageCount: number
}

export interface ArticleItemsAPI {
  data: NewsArticleAPI[]
  documentsCount: number
  pageCount: number
}
