import { SmartMeterOverlayType } from '_types/CMS/form'
import { FormByID } from '_types/CMS/compositions'

import {
  PowerCutCurvedBannerType,
  DangerousSituationType,
} from '_types/CMS/nodes/components/UKPN'

import {
  CorePageProperties,
  NotAvailableData,
  PageTypeNames,
  UmbracoForm,
} from '../..'

export type PowerCutFormPageComponents =
  | PowerCutCurvedBannerType
  | DangerousSituationType
export interface PowerCutFormPage
  extends CorePageProperties,
    NotAvailableData,
    SmartMeterOverlayType {
  __typename: PageTypeNames.POWER_CUT_FORM_PAGE
  formDetails: (UmbracoForm | FormByID)[]
  includeReference: boolean
  thankYouPageId: string
  name: string
  url: string
  descendants: {
    items: Array<{
      url: string
      id: string
    }>
  }
  components: PowerCutFormPageComponents[]
}
