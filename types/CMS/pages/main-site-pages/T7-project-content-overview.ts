import { UsefulLinksType } from '_types/CMS/nodes/components/UKPN'
import { BreadcrumbsItem, CorePageProperties, PageTypeNames } from '../..'

//Add all components used only on T7ProjectContentOverview
export type T7ProjectContentOverviewComponents = UsefulLinksType

export interface T7ProjectContentOverview extends CorePageProperties {
  __typename: PageTypeNames.T7_PROJECTS_CONTENT_OVERVIEW
  ancestors: {
    items: BreadcrumbsItem[]
  }
  name: string
  url: string
  components?: T7ProjectContentOverviewComponents[]
}
