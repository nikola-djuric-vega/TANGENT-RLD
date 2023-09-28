import { CorePageProperties, Link, PageTypeNames } from '..'

export interface ICELandingPage extends CorePageProperties {
  __typename: PageTypeNames.ICE_LANDING_PAGE
  pageTitle: string
  introCopy: string
  links?: Link[]
  mandatoryText: string
  selectLabel: string
}
