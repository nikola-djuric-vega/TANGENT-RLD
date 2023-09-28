import { CorePageProperties, PageTypeNames, UmbracoForm } from '../..'
import { FormByID } from '_types/CMS/compositions'

export interface PSRFormPage extends CorePageProperties {
  __typename: PageTypeNames.PSR_FORM_PAGE
  name: string
  url: string
  formDetails: (UmbracoForm | FormByID)[]
  includeReference: boolean
  thankYouPageId: string
  mandatorySection: string
  descendants: {
    items: Array<{
      url: string
      id: string
    }>
  }
}
