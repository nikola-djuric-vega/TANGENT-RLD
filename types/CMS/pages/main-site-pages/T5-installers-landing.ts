import { UsefulLinksType } from '_types/CMS/nodes/components/UKPN'
import { BreadcrumbsItem, CorePageProperties, PageTypeNames } from '../..'

//Add all components used only on T5InstallersLandingPage
export type T5InstallersLandingComponents = UsefulLinksType

export interface T5InstallersLandingPage extends CorePageProperties {
  __typename: PageTypeNames.T5_INSTALLERS_LANDING
  ancestors: {
    items: BreadcrumbsItem[]
  }
  name: string
  url: string
  components?: T5InstallersLandingComponents[]
}
