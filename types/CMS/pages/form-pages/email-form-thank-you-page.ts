import { CorePageProperties, PageTypeNames, DocumentType } from '../..'
import { Link } from '_types/CMS/link'

export interface EmailFormThankYouPage extends CorePageProperties {
  __typename: PageTypeNames.EMAIL_FORM_THANK_YOU_PAGE
  name: string
  url: string
  thankYouText: string
  buttonLink?: Link
}
