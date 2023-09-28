import { CorePageProperties, PageTypeNames } from '..'
import {
  HelpAndAdviceItemType,
  HelpAndAdviceType,
  PlainLinkType,
  PowerCutContactUsType,
  SocialLinksType,
} from '../nodes/components/UKPN'

export interface MapPage extends CorePageProperties {
  __typename: PageTypeNames.MAP_PAGE
  name: string
  url: string
  children: ChildrenItems
}

export interface ChildrenItems {
  items: PowerCutPanelItem[]
}

export type PowerCutPanelItem =
  | MultipinPanel
  | PlannedWorkPanel
  | Aware
  | UnplannedPanel
  | NotAwarePanel
  | PowerBackOn
  | NotInOurArea

export type PowerCutPanelComponent =
  | HelpAndAdviceType
  | PowerCutContactUsType
  | SocialLinksType
  | PlainLinkType

export enum PowerCutPanel {
  MULTIPIN = 'MultipinPanel',
  PLANNED = 'PlannedWorkPanel',
  AWARE = 'AwarePanel',
  UNPLANNED = 'UnplannedPanel',
  NOT_AWARE = 'NotAwarePanel',
  RESTORED = 'PowerBackOnPanel',
  NOT_IN_AREA = 'NotInOurAreaPanel',
}

export interface MultipinPanel {
  __typename: PowerCutPanel.MULTIPIN
  title: string
  previewTitle: string
  previewDescription?: string
  incidentInYourAreaTitle: string
  incidentsIntroduction: string
  plannedPowerCutsTitle: string
  restoredPowerCutsTitle: string
  unplannedPowerCutsTitle: string
  incidentReference: string
  affectedPostcodes: string
  showMoreIncidentsDetails: string
  isIndexed: boolean
  components: PowerCutPanelComponent[]
}

export interface PlannedWorkPanel {
  __typename: PowerCutPanel.PLANNED
  image: string
  title: string
  previewDescription?: string
  hidePostcode: boolean
  isIndexed: boolean
  components: PowerCutPanelComponent[]
}

export interface Aware {
  __typename: PowerCutPanel.AWARE
  title: string
  description: string
  disableReportButton: boolean
  disableDescription: boolean
  hidePostcode: boolean
  isIndexed: boolean
  components?: PowerCutPanelComponent[]
}

export interface UnplannedPanel {
  __typename: PowerCutPanel.UNPLANNED
  title?: string
  previewDescription?: string
  image?: string
  isIndexed: boolean
  subtitle?: string
  eTRIntroduction?: string
  eTRFooter?: string
  noETRFooter?: string
  informationNotice?: string
  reasonTitle?: string
  stormActionTitle?: string
  stormActionText?: string
  stormReasonTitle?: string
  stormReasonText?: string
  hidePostcode: boolean
  thankYouTitle?: string
  articles?: HelpAndAdviceItemType[]
  components?: PowerCutPanelComponent[]
}

export interface NotAwarePanel {
  __typename: PowerCutPanel.NOT_AWARE
  title: string
  image: string
  isIndexed: boolean
  hidePostcode: boolean
  components: PowerCutPanelComponent[]
}

export interface PowerBackOn {
  __typename: PowerCutPanel.RESTORED
  title: string
  previewDescription?: string
  image: string
  isIndexed: boolean
  hidePostcode: boolean
  components: PowerCutPanelComponent[]
}

export interface NotInOurArea {
  __typename: PowerCutPanel.NOT_IN_AREA
  title: string
  image: string
  isIndexed: boolean
  hidePostcode: boolean
  components: PowerCutPanelComponent[]
}
