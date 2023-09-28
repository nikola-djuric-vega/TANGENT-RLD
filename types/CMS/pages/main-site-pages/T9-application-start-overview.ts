import { BreadcrumbsItem, CorePageProperties, Link, PageTypeNames } from '../..'
import {
  SubNavigationType,
  UsefulLinksType,
} from '_types/CMS/nodes/components/UKPN'

//Add all components used only on T9ApplicationStartOverview
export type T9ApplicationStartOverviewComponents =
  | UsefulLinksType
  | SubNavigationType

export interface T9ApplicationStartOverview extends CorePageProperties {
  __typename: PageTypeNames.T9_APPLICATION_START_OVERVIEW
  ancestors: {
    items: BreadcrumbsItem[]
  }
  name: string
  url: string
  pageSubtitle?: string
  components?: T9ApplicationStartOverviewComponents[]
  title?: string
  checklistItems?: string[]
  footer?: string
  postcodeFormTitle?: string
  postcodeFormDestination?: Link
  postcodePDFDownloadLink?: Link
}
