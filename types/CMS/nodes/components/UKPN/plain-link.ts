import { ComponentsTypeName } from '_types/CMS'
import { Link } from '_types/CMS/link'

export interface PlainLinkType {
  __typename: ComponentsTypeName.PLAIN_LINK
  title?: string
  link?: Link
}
