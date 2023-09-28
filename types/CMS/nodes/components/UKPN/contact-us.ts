import { ComponentsTypeName, Link } from '_types/CMS'
import { IconNames } from '_types/local'

export interface ContactUsType {
  __typename: ComponentsTypeName.CONTACT_US
  contactUsItems?: ContactUsItem[]
  removeBottomMargin?: boolean
}

export interface ContactUsItem {
  icon?: IconNames
  title?: string
  text?: string
  telephone1?: string
  telephone2?: string
  email?: Link
  emailHeader?: string
  twitter?: Link
  facebook?: Link
  linkedIn?: Link
}
