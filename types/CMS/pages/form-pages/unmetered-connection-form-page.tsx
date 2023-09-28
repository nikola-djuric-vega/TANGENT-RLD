import { CorePageProperties, Form, PageTypeNames, UmbracoForm } from '../..'
import { FormByID } from '_types/CMS/compositions'

export interface UnMeteredConnectionFormPage extends CorePageProperties {
  __typename: PageTypeNames.UNMETERED_CONNECTION_FORM_PAGE
  name: string
  url: string
  formDetails: (UmbracoForm | FormByID)[]
  representativeFormRepeater: Form
  assetFormRepeater: Form
  includeReference: boolean
  thankYouPageId: string
  descendants: {
    items: Array<{
      url: string
      id: string
    }>
  }
}
