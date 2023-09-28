import { CorePageProperties, PageTypeNames, DocumentType } from '../..'
import { Link } from '_types/CMS/link'

export interface CatAThankYouPage extends CorePageProperties {
  __typename: PageTypeNames.CAT_A_THANK_YOU_PAGE
  name: string
  url: string
  thankYouText: string
  buttonLink?: Link
}
