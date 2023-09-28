import { ComponentsTypeName } from '_types/CMS/base'
import { Media } from '_types/CMS/media'
import { Link } from '_types/CMS/link'
export interface PowerCutComponentType {
  __typename: ComponentsTypeName.POWER_CUT_COMPONENT
  postcodePlaceholderText: string
  addressNotFound: string
  subtitle?: string
  cTAText: string
  listLink: Link
  image?: Media
  mapLink: Link
  title: string
}
