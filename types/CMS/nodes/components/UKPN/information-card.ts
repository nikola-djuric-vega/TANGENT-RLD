import { IconNames } from '_types/local'

export enum InformationCardColour {
  PURPLE = 'purple',
  YELLOW = 'yellow',
}

export interface InformationCardType {
  informationCardColour?: InformationCardColour
  informationCardIcon?: IconNames
  stormChecklistSubtitle?: string
  informationCardTitle?: string
  informationCardText?: string
}
