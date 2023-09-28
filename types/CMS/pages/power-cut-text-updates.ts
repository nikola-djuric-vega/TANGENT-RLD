import { CorePageProperties, PageTypeNames, Media, Link } from '..'
import { IconNames } from '_types/local'
export interface PowerCutTextUpdates extends CorePageProperties {
  __typename:
    | PageTypeNames.POWER_CUT_UNSUBSCRIBE_TEXT_UPDATES
    | PageTypeNames.POWER_CUT_REGISTER_TEXT_UPDATES
  noAddressFoundTitle: string
  noAddressFoundSubtitle?: string
  noAddressFoundTerms?: string[]
  noAddressFoundBackgroundImage: Media
  children: {
    items?: Link[]
  }
  name: string
  url: string
}

export interface PowerCutRegisterTextUpdates extends PowerCutTextUpdates {
  registerForTextUpdatesTitle: string
  registerForTextUpdatesIcon: IconNames
  registerForTextUpdatesGdpr?: string
  registerForTextUpdatesBackButton?: boolean
}

export interface PowerCutUnsubscribeTextUpdates extends PowerCutTextUpdates {
  unsubscribeForTextUpdatesTitle: string
  unsubscribeForTextUpdatesIcon: IconNames
  unsubscribeForTextUpdatesGdpr?: string
  unsubscribeForTextUpdatesBackButton?: boolean
}
