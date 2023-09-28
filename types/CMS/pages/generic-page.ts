import {
  CorePageProperties,
  PageTypeNames,
  Components,
  BreadcrumbsItem,
} from '..'

export interface GenericPage extends CorePageProperties {
  __typename: PageTypeNames.GENERIC_PAGE
  ancestors: {
    items: BreadcrumbsItem[]
  }
  name: string
  url: string
  components: Components[]
}
