import { CorePageProperties, PageTypeNames } from '_types/CMS/base'
import { Media } from '../media'

export interface RadioButtonsWithMainImage extends CorePageProperties {
  __typename: PageTypeNames.RADIO_BUTTONS_WITH_MAIN_IMAGE
  radioButtonWithImageMainImage: Media
  radioButtonWithImageText: string
  radioButtonWithImageOptions: string[]
}
