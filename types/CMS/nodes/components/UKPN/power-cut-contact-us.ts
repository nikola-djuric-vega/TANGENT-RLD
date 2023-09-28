import { ComponentsTypeName, Link } from '_types/CMS'

export interface PowerCutContactUsType {
  __typename: ComponentsTypeName.POWER_CUT_CONTACT_US
  author?: AuthorItem
  title?: string
  text?: string
  telephone?: string
  facebook?: Link
  twitter?: Link
  whatsApp?: Link
}

export interface AuthorItem {
  authorName?: string
  department?: string
  image?: {
    url: string
    name: string
  }
}
