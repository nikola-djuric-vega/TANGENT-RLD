import { MediaTileType, TilesLayout } from '_types/CMS/compositions/media-tiles'
import { ComponentsTypeName } from '_types/CMS'
import { IconNames } from '_types/local'

export interface MediaTilesType {
  title: string
  mediaTiles: MediaTileType[]
  layout: TilesLayout
  __typename: ComponentsTypeName.MEDIA_TILES
  removeBottomMargin?: boolean
  icon?: IconNames
}
