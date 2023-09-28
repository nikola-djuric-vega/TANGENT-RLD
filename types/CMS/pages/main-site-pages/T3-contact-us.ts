import { UsefulLinksType } from '_types/CMS/nodes/components/UKPN'
import { BreadcrumbsItem, CorePageProperties, PageTypeNames } from '../..'

//Add all components used only on T3ContactUsPage
export type T3ContactUsPageComponents = UsefulLinksType

export interface T3ContactUs extends CorePageProperties {
  __typename: PageTypeNames.T3_CONTACT_US
  ancestors: {
    items: BreadcrumbsItem[]
  }
  name: string
  url: string
  components?: T3ContactUsPageComponents[]
  applyPowerCutNavigation?: boolean
}
