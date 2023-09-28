import { ComponentsTypeName } from '_types/CMS'
import { PageTypeNames } from '_types/CMS/base'

export interface SocialLinksType {
  __typename: ComponentsTypeName.SOCIAL_LINKS
  title?: string
  pageContainer?: PageTypeNames
}
