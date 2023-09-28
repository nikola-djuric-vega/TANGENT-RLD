import { CorePageProperties, Form, PageTypeNames, UmbracoForm } from '../..'
import { FormByID } from '_types/CMS/compositions'

export interface StreetFormPage extends CorePageProperties {
  __typename: PageTypeNames.STREET_FORM_PAGE
  name: string
  url: string
  formDetails: (UmbracoForm | FormByID)[]
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
