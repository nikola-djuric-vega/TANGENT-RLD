import { ComponentsTypeName, Link } from '_types/CMS'
import { IconNames } from '_types/local'

export interface NavigationIconType {
  __typename: ComponentsTypeName.NAVIGATION_ICON
  title?: string
  items?: NavIcon[]
}

export interface NavIcon {
  title?: string
  subtitle?: string
  icon?: IconNames
  link?: Link
}
