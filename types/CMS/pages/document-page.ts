import { CorePageProperties, Link, PageTypeNames } from '..'

export interface DocumentPage extends CorePageProperties {
  __typename: PageTypeNames.DOCUMENT_PAGE
  id: string
  assetVersion: number
  description: string
  assetPicker: { name: string; umbracoExtension: string; url: string }
  pageTitle: string
  name: string
  url: string
}
