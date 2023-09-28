import { CorePageProperties, Link, PageTypeNames } from '..'

export interface ErrorPage extends CorePageProperties {
  __typename: PageTypeNames.ERROR_PAGE
  pageText: string
  errorPageButtonLink: Link
  name: string
  url: string
}
