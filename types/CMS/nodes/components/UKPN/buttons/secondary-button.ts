import { ButtonColors, Link, LinkAppearance } from '_types/CMS'

export interface SecondaryButton {
  uRL?: Link
  __typename: LinkAppearance.SECONDARY
  cTAType: ButtonColors
}
