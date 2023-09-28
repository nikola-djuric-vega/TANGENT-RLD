import { ComponentsTypeName, Link } from '_types/CMS'

export interface SubNavigationType {
  __typename: ComponentsTypeName.SUB_NAVIGATION
  subNavigationLinks?: Link[]
}
