import { ComponentsTypeName, Link } from '_types/CMS'
import { IconNames } from '_types/local'
export interface StormBodyType {
  __typename: ComponentsTypeName.STORM_BODY
  powerCutBoxRegisterForTextsLink?: Link
  powerCutBoxFacebookLink?: Link
  powerCutBoxTwitterLink?: Link
  powerCutBoxIcon: IconNames
  powerCutBoxTitle: string
  stormBodyTitle: string
  stormBodyText: string
}
