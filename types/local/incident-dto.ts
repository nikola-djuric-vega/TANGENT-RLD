export enum IncidentType {
  LOW_VOLTAGE = 2,
  HIGH_VOLTAGE_NETWORK = 3,
  HIGH_VOLTAGE = 4,
}

export interface IncidentDto {
  incidentId: string
  incidentReference: string
  incidentCategory: string
  incidentType: IncidentType
  incidentPriority: number
  incidentDescription?: string
  deadDeviceAlias?: string
  dangerFlag?: boolean
  statusId: number
  ivrMessageFlag?: boolean
  creationDateTime: string
  restoredDateTime: string | null
  estimatedRestorationDate: string | null
  plannedDate: string | null
  receivedDate?: string
  mainMessage?: string
  message?: string
  noCustomerAffected: number
  noPlannedCustomers: number
  noCallsReported: number
  operatingZone?: string
  latitude?: number
  longitude?: number
  easting?: number
  northing?: number
  resource: ResourceDto
  affectedCustomers: AffectedCustomerDto[]
  logs: LogDto[]
  postCodesAffected: string[]
  postCodesRestored: string[]
  postCodesPlanned: string[]
  postCodesAffectedAudit?: string[]
  postCodesRestoredAudit?: string[]
  customersOnSupply: number
  customersOffSupply: number
  primaryFeeder?: Feeder
  secondayFeeder?: Feeder
  supplementaryMessage?: string
  timestamp: string
  incidentTypeName: string | null
  plannedIncidentReason: string
  noComponentsAffected?: number
  scope: string | null
}

export interface ResourceDto {
  id: string | null
  name: string | null
  notificationDetails?: string | null
  notificationMethod?: string | null
  reference?: string | null
  estimatedTimeOfArrival: string | null
  dispatchedDate: string | null
  arrivalDate: string | null
  statusId: number
}

export interface AffectedCustomerDto {
  customerId?: number
  postcode: string
  latitude: number
  longitude: number
}

export interface LogDto {
  actualEventTime: string
  categoryId: number
  typeId?: number
  comment: string
  loggedTime: string
  operator?: string
}

export interface Feeder {
  feeder: string
  name: string
  alias: string
}
