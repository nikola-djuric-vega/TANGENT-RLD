import { ComponentsTypeName, Media } from '_types/CMS'

export interface ImageGridType {
  __typename: ComponentsTypeName.IMAGE_GRID
  title?: string
  gridItems?: GridItem[]
}

export interface GridItem {
  logo?: Media
}
