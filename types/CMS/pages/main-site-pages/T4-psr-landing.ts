import { UsefulLinksType } from '_types/CMS/nodes/components/UKPN'
import { BreadcrumbsItem, CorePageProperties, PageTypeNames } from '../..'

//Add all components used only on T4PsrLandingPage
export type T4PsrLandingPageComponents = UsefulLinksType

export interface T4PsrLandingPage extends CorePageProperties {
  __typename: PageTypeNames.T4_PSR_LANDING
  ancestors: {
    items: BreadcrumbsItem[]
  }
  name: string
  url: string
  components?: T4PsrLandingPageComponents[]
}
