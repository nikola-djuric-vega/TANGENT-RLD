import { ComponentsTypeName } from '_types/CMS'

export interface RawHtml {
  __typename: ComponentsTypeName.RAW_HTML
  rawHtml?: string
  scriptUrl?: string
}
