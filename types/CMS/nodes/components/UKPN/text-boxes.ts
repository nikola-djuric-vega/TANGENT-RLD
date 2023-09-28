import { ComponentsTypeName, Link } from '_types/CMS'
import { IconNames } from '_types/local'

export interface TextBoxesType {
  __typename: ComponentsTypeName.TEXT_BOXES
  textBoxes?: TextBox[]
  removeBottomMargin?: boolean
}

export interface TextBox {
  title?: string
  text?: string
  textBoxCTA?: Link
  icon?: IconNames
  backgroundStyle?: TextBoxBackgroundStyle
}

export enum TextBoxBackgroundStyle {
  ORANGE = 'orange',
  BLUE = 'blue',
}
