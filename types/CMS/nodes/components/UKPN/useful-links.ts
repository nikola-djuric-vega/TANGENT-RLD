import { ComponentsTypeName, Link } from '_types/CMS'

export interface UsefulLinksType {
  __typename: ComponentsTypeName.USEFUL_LINKS
  usefulLinkItems?: UsefullLinksItem[]
  whiteBackground?: boolean
  title?: string
}

export interface UsefullLinksItem {
  title?: string
  link?: Link
  changeAppearance?: boolean
}
