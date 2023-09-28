import { FormByID } from '_types/CMS/compositions'
import { CorePageProperties, PageTypeNames, UmbracoForm } from '../..'
import { EmailSettings } from '../../compositions/email-settings'

export interface EmailFormPage extends CorePageProperties {
  __typename: PageTypeNames.EMAIL_FORM_PAGE
  name: string
  url: string
  formDetails: (UmbracoForm | FormByID)[]
  includeReference: boolean
  thankYouPageId: string
  descendants: {
    items: Array<{
      url: string
      id: string
    }>
  }
}
