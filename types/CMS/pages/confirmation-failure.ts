import { CorePageProperties, PageTypeNames, Link } from '..'
import { IconNames } from '_types/local'

export interface ConfirmationFailure extends CorePageProperties {
  __typename: PageTypeNames.CONFIRMATION_FAILURE
  title: string
  icon: IconNames
  copy: string
  cTA?: Link
  name: string
  url: string
  backButton?: boolean
}
