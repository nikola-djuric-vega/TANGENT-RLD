import { Components, CorePageProperties, PageTypeNames } from '..'

export interface PowerCutMapPage extends CorePageProperties {
  __typename: PageTypeNames.UKPN_HOMEPAGE
  components: Components[]
  heroTitle: string
  name: string
  url: string
}
