import { ButtonColors, Link, LinkAppearance } from '_types/CMS'

export interface PrimaryButton {
  uRL?: Link
  __typename: LinkAppearance.PRIMARY
  cTAType: ButtonColors
}
