import { IncidentDto } from './incident-dto'
import { IconNames } from '.'
import { Step } from './step'

export interface IncidentData {
  incidents: IncidentContent[]
  twitterFeeds: any[]
  pollingInterval: number
  serviceDown: boolean
  serviceDownUrl?: string
  isCached: boolean
}

export interface PostcodeCenter {
  lat: number
  lng: number
}

export interface PostcodeData {
  center: PostcodeCenter
  postcode: string
  coordinates?: PostcodeCenter[]
}

export interface Marker extends PostcodeData {
  powerCutType: PowerCutType
  incidentReference: string
  panelContentUrl: string
}

export enum PowerCutType {
  RESTORED_INCIDENT = 'Restored',
  UNPLANNED_INCIDENT = 'Unplanned',
  PLANNED_INCIDENT = 'Planned',
  MULTIPLE_INCIDENT = 'Multiple',
  REPORTED_INCIDENT = 'Reported',
}

export interface UserLocation {
  postcode: string
  postcodeData: PostcodeData[]
  powerCutType: string
}

export type Incident = IncidentContent & {
  postcode: string
  coordinates: {
    [postcode: string]: PostcodeCenter[] | undefined
  }
  postcodeData: Marker[]
}

export interface IncidentContentCommon {
  incidentReference?: string | null
  panelContentUrl: string
  steps?: Step[] | null
  ukpnIncident?: IncidentDto | null
  postcodesRemaining: string[]
  fullPostcodeData?: string[] | null
  postcodeData: Marker[]
  pinLatitude?: number | null
  pinLongitude?: number | null
  incidentCategoryCustomerFriendlyDescription?: string | null
  incidentTypeTBCEstimatedFriendlyDescription?: string | null
  incidentsCount?: number
  serviceDown: boolean
  serviceDownUrl?: string | null
  scope?: string | null
}

export interface IncidentContentUnplanned extends IncidentContentCommon {
  powerCutType: PowerCutType.UNPLANNED_INCIDENT
}

export interface IncidentContentPlanned extends IncidentContentCommon {
  powerCutType: PowerCutType.PLANNED_INCIDENT
}

export interface IncidentContentRestored extends IncidentContentCommon {
  powerCutType: PowerCutType.RESTORED_INCIDENT
}

export interface IncidentContentReported extends IncidentContentCommon {
  powerCutType: PowerCutType.REPORTED_INCIDENT
}

export interface IncidentContentMulti extends IncidentContentCommon {
  powerCutType: PowerCutType.MULTIPLE_INCIDENT
  unplannedIncidents?: IncidentContentUnplanned[]
  plannedIncidents?: IncidentContentPlanned[]
  restoredIncidents?: IncidentContentRestored[]
}

export type IncidentContent =
  | IncidentContentUnplanned
  | IncidentContentPlanned
  | IncidentContentRestored
  | IncidentContentReported
  | IncidentContentMulti

export interface IndividualIncidentContent {
  result: IncidentContent
}

export interface IncidentListItem {
  extraProperty: ExtraPropertiesItem
  type: PowerCutType
  affectedPostcodes: string[]
  strapLine: string
  icon: IconNames
  moreInfo: {
    headline: string
    info: string
    extraInfo: string
    recievedDate: string
  }
  customersAffected: number | string
  reference: string
  incidentId: string
}

export interface ExtraPropertiesItem {
  friendlyDescription: string
  TBCDescription: string
}
