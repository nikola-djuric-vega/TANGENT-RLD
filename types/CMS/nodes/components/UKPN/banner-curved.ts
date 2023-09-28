import { ComponentsTypeName, Link, Media } from '_types/CMS'

export interface BannerCurvedType {
  __typename: ComponentsTypeName.BANNER_CURVED
  tag?: string
  header: string
  subHeader?: string
  desktopImage: Media
  bannerCurvedCTA?: Link
  removeBottomMargin?: boolean
  backgroundColour?: boolean
}
