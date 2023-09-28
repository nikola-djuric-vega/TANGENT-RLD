import { CorePageProperties, PageTypeNames } from '_types/CMS/base'
import { IconNames } from '_types/local'
import { Media } from '../media'

export interface RadioButtonsWithImages extends CorePageProperties {
  __typename: PageTypeNames.RADIO_BUTTONS_WITH_IMAGES
  radioButtonQuestion: string
  buttons: RadioButtons[]
}

export interface RadioButtons {
  radioButtonText: string
  radioButtonImage?: Media
  radioButtonIcon?: IconNames
}
