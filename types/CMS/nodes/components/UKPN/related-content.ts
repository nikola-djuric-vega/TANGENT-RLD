import { ComponentsTypeName } from '_types/CMS'
import { CTAButton } from './buttons/base'

export interface RelatedContentType {
  __typename: ComponentsTypeName.RELATED_CONTENT
  moduleTitle?: string
  moduleColor?: ModuleColors
  links?: RelatedContentItem[]
}

export interface RelatedContentItem {
  serviceTitle?: string
  serviceCopyText?: string
  cTAButton?: CTAButton[]
}

export enum ModuleColors {
  DEFAULT = 'Default',
  BLUE = 'Blue',
  DARK_BLUE = 'Dark blue',
}
