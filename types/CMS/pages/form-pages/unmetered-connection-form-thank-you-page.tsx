import { CorePageProperties, PageTypeNames } from '../..'
import { Link } from '_types/CMS/link'

export interface UnMeteredConnectionFormThankYouPage
  extends CorePageProperties {
  __typename: PageTypeNames.UNMETERED_CONNECTION_THANK_YOU_PAGE
  name: string
  url: string
  thankYouText: string
  buttonLink?: Link
}
