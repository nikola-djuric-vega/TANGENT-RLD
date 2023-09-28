import { CorePageProperties, PageTypeNames, UmbracoForm } from '../..'
import { FormByID } from '_types/CMS/compositions'

export interface CatAFormPage extends CorePageProperties {
  __typename: PageTypeNames.CAT_A_FORM_PAGE
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
