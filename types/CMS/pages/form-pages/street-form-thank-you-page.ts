import { CorePageProperties, PageTypeNames, DocumentType } from '../..'
import { Link } from '_types/CMS/link'

export interface StreetFormThankYouPage extends CorePageProperties {
  __typename: PageTypeNames.STREET_FORM_THANK_YOU_PAGE
  name: string
  url: string
  thankYouText: string
  buttonLink?: Link
}
