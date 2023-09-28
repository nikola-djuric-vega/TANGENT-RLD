import { ComponentsTypeName, Media } from '_types/CMS'
export interface WhatsMyMpanType {
  __typename: ComponentsTypeName.WHATS_MY_MPAN
  leftTitle: string
  leftBlurb: string
  rightDesktopImage: Media
  rightMobileImage: Media
  successfulTitle: string
  successfulBlurb: string
  removeBottomMargin: boolean
  checkboxText: string
  errorTitle: string
  errorBlurb: string
}
