import { CorePageProperties, Link, PageTypeNames } from '..'

export interface SuccessPage extends CorePageProperties {
  __typename: PageTypeNames.SUCCESS_PAGE
  name: string
  url: string
  pageBody: string
  cTAButton: Link
}
