import { UsefulLinksType } from '_types/CMS/nodes/components/UKPN'
import { BreadcrumbsItem, CorePageProperties, PageTypeNames } from '../..'

//Add all components used only on T6SSContentOverview
export type T6SSContentOverviewComponents = UsefulLinksType

export interface T6SSContentOverview extends CorePageProperties {
  __typename: PageTypeNames.T6_SS_CONTENT_OVERVIEW
  ancestors: {
    items: BreadcrumbsItem[]
  }
  name: string
  url: string
  components?: T6SSContentOverviewComponents[]
}
