import { ComponentsTypeName } from '_types/CMS'
import { IconNames } from '_types/local'

export interface ProcessGraphicType {
  __typename: ComponentsTypeName.PROCESS_GRAPHIC
  title?: string
  subTitle?: string
  processItems?: ProcessItem[]
  removeBottomMargin?: boolean
}

export interface ProcessItem {
  icon?: IconNames
  heading?: string
  subheading?: string
}
