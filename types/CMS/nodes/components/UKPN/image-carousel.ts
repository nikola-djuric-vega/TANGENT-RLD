import { ComponentsTypeName, Media } from '_types/CMS'

export interface ImageCarouselType {
  __typename: ComponentsTypeName.IMAGE_CAROUSEL
  carosuelTitle?: string
  carosuelSubtitle?: string
  carosuelImages?: Media[]
}
