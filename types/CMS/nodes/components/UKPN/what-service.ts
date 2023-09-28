import { ComponentsTypeName, Media } from '_types/CMS'
import { Link } from '_types/CMS/link'

export interface WhatServiceType {
  __typename: ComponentsTypeName.WHAT_SERVICE
  powerCutBox: PowerCutBox[]
  moduleCopyText?: string
  moduleTitle: string
  moduleServiceTitle: string
  whatServiceItems: WhatServiceItem[]
  removeBottomMargin: boolean
}

export interface PowerCutBox {
  registerForTextUpdatesText?: string
  registerForTextUpdatesLink?: Link
  viewPowerCutMapButtonText?: string
  phoneNumberHeader: string
  powerCutMapLink: Link
  powerCutImage: Media
  phoneNumber: string
  header: string
  title: string
}

export interface WhatServiceItem {
  title?: string
  subTitle?: string
  copyText?: string
  linkText: string
  whatServiceItemLinks: Link[]
}
