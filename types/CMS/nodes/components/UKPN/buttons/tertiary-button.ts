import { ButtonColors, Link, LinkAppearance } from '_types/CMS'
export interface TertiaryButton {
  uRL?: Link
  __typename: LinkAppearance.TERTIARY
  cTAType: ButtonColors
  icon?: string
}
