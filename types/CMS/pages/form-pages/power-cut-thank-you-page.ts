import { CorePageProperties, PageTypeNames, DocumentType } from '../..'
import { AccordionType } from '_types/CMS/nodes/components/UKPN'
import { Link } from '_types/CMS/link'

export type PowerCutThankYouPageComponents = AccordionType
export interface PowerCutThankYouPage extends CorePageProperties {
  __typename: PageTypeNames.POWER_CUT_THANK_YOU_PAGE
  components: PowerCutThankYouPageComponents[]
  thankYouText: string
  buttonLink?: Link
  name: string
  url: string
}
