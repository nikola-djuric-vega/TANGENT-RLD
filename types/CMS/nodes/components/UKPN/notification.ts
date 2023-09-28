import { ComponentsTypeName, Link } from '_types/CMS'
import { IconNames } from '_types/local'

export interface NotificationType {
  __typename: ComponentsTypeName.NOTIFICATION
  notificationMessage?: string
  link?: Link
  icon?: IconNames
  style?: string
  secondaryCallToAction?: string
  removeBottomMargin?: boolean
}
