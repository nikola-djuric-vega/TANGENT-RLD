import { PrimaryButton } from './buttons/primary-button'
import { ComponentsTypeName, Link } from '_types/CMS'
import { ContactUsType, SimpleContentType } from '.'
import { IconNames } from '_types/local'

export interface HelpAndContactType {
  __typename: ComponentsTypeName.HELP_AND_CONTACT
  mainTitle?: string
  subTitle?: string
  firstFramePromptText?: string
  helpAndContactTabs?: HelpAndContactTabType[]
}

export interface HelpAndContactTabType {
  tabTitle?: string
  icon?: IconNames
  // add components to cms content model
  tabComponents?: (PrimaryButton | SimpleContentType | ContactUsType)[]
  helpAndContactLinkSet?: (
    | LinkSetItem
    | HelpAndContactLinkSetLink
    | SimpleContentType
  )[]
}

export interface LinkSetItem {
  __typename: HelpAndContactLinkType.LINK_SET_ITEM
  title?: string
  subtitle?: string
  components?: (PrimaryButton | SimpleContentType | ContactUsType)[]
}

export interface HelpAndContactLinkSetLink {
  __typename: HelpAndContactLinkType.HELP_AND_CONTACT_LINK_SET_LINK
  link?: Link
}

export enum HelpAndContactLinkType {
  LINK_SET_ITEM = 'LinkSetItem',
  HELP_AND_CONTACT_LINK_SET_LINK = 'HelpAndContactLinkSetLink',
}
