import { ComponentsTypeName, Media } from '_types/CMS'

export interface AreaCheckerType {
  __typename: ComponentsTypeName.AREA_CHECKER
  title: string
  text: string
  desktopImage: Media
  mobileImage: Media
  successTitle: string
  successText: string
  errorAreaTitle: string
  errorAddressTitle: string
  errorAddressText: string
  removeBottomMargin?: boolean
}
