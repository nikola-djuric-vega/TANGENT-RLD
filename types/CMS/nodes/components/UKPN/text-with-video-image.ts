import { ComponentsTypeName, Link, Media } from '_types/CMS'
import { CTAButton } from './buttons/base'
import { IconNames } from '_types/local'

export interface TextWithVideoImageType {
  __typename: ComponentsTypeName.TEXT_WITH_VIDEO_IMAGE
  heading?: string
  mainText?: string
  image?: Media
  video?: string
  imageStyle?: string
  imageOverlayText?: string
  imageOverlayIcon?: IconNames
  imageOverlayLink?: Link
  mediaPlacement?: MediaPlacement
  cTAs?: CTAButton[]
  warningMessage?: string
  removeBottomMargin?: boolean
}

export enum MediaPlacement {
  CENTER = 'Center',
  LEFT = 'Left',
  RIGHT = 'Right',
}
