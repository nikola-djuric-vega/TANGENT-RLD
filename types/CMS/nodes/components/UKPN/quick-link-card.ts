import { ComponentsTypeName } from '_types/CMS/base'
import { Link } from '_types/CMS/link'
import { IconNames } from '_types/local/icons'

export interface QuickLinkCardType {
  __typename: ComponentsTypeName.QUICK_LINK_CARD
  quickCardLinks: QuickLinkCardItemType[]
  enable4ColumnLayout?: boolean
}

export interface QuickLinkCardItemType {
  linkIcon?: IconNames
  linkURL?: Link
}
