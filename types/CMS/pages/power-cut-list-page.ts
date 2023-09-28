import { CorePageProperties, PageTypeNames } from '..'
import { PowerCutContactUsType } from '../nodes/components/UKPN'

export interface PowerCutListPage extends CorePageProperties {
  __typename: PageTypeNames.POWER_CUT_LIST_PAGE
  name: string
  url: string
  contactUsItems: PowerCutContactUsType[]
}
