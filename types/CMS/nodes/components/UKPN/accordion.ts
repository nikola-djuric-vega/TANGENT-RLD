import { ComponentsTypeName, Link } from '_types/CMS'
import { CTAButton } from './buttons/base'
import { IconNames } from '_types/local'

export interface AccordionType {
  __typename: ComponentsTypeName.ACCORDION
  accordionTitle?: string
  accordionItems?: AccordionItemType[]
  accordionEnableAlwaysOpen?: boolean
  isPowerCut?: boolean
}

export interface AccordionItemType {
  accordionItemTitle?: string
  accordionDescription?: string
  accordionImage?: AccordionImage
  accordionImageOverlay?: string
  accordionImageOverlayIcon?: IconNames
  accordionVideoID?: string
  accordionVideoPlayText?: string
  accordionLinkItems?: AccordionLinkItem[]
  categories?: CategoryItemType[]
}

export interface AccordionLinkItem {
  linkSetTitle?: string
  linkSetLinks?: CTAButton[]
}

export interface AccordionImage {
  url: string
  name: string
  umbracoHeight: string
  umbracoWidth: string
}
export interface CategoryItemType {
  name: CategoryItemTitle
  icon: IconNames
}

export enum CategoryItemTitle {
  YOUR_PROPERTY = 'Your property',
  EXTRA_SUPPORT = 'Extra support',
  TEXT_UPDATES = 'Text updates',
  PLANNED_POWER_CUTS = 'Planned power cuts',
}
