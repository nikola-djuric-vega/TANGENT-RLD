import { CorePageProperties, PageTypeNames } from '../..'
import { Link } from '_types/CMS/link'

export interface MeteredConnectionFormThankYouPage extends CorePageProperties {
  __typename: PageTypeNames.METERED_CONNECTION_THANK_YOU_PAGE
  name: string
  url: string
  thankYouText: string
  buttonLink?: Link
}
