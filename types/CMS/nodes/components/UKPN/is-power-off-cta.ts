import { ComponentsTypeName, Link } from '_types/CMS'
import { IconNames } from '_types/local'

export interface IsPowerOffCTAType {
  __typename: ComponentsTypeName.IS_POWER_OFF_CTA
  title: string
  icon: IconNames
  body: string
  link: Link
}
