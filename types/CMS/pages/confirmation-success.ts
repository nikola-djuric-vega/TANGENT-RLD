import { CorePageProperties, PageTypeNames, Link } from '..'
import { IconNames } from '_types/local'

export interface ConfirmationSuccess extends CorePageProperties {
  __typename: PageTypeNames.CONFIRMATION_SUCCESS
  title: string
  icon: IconNames
  copy: string
  cTA?: Link
  name: string
  url: string
  backButton?: boolean
}
