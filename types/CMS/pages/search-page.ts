import { CorePageProperties, PageTypeNames } from '..'

export interface SearchPage extends CorePageProperties {
  __typename: PageTypeNames.SEARCH_PAGE
  name: string
  url: string
}
