import { Media } from '..'

export interface MediaTileType {
  image: Media
  text: string
  video?: string
}

export enum TilesLayout {
  TIMES_THREE = '3-column',
  TIMES_TWO = '2-column',
}
