import { ComponentsTypeName } from '_types/CMS'

export interface SimpleContentType {
  __typename: ComponentsTypeName.SIMPLE_CONTENT
  isHelpAndContact?: boolean
  text: string
}
