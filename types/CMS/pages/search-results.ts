import { CorePageProperties, PageTypeNames, BreadcrumbsItem } from '..'

export interface SearchResults extends CorePageProperties {
  __typename: PageTypeNames.SEARCH_RESULTS_PAGE
  ancestors: {
    items: BreadcrumbsItem[]
  }
  name: string
  url: string
}
