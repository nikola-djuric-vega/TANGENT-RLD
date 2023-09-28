export interface isSmartResponse {
  smartPingEnabled: boolean
  statusMessage: string
  onSupply: boolean
  category: string
  deviceId: string
  isAzure: boolean
  isSmart: boolean
  status: string
}

export interface SmartMeterPingResponse {
  energisationStatus: string
  newCorrelationId: string
  statusMessage: string
  stopPinging?: boolean
  pingAllowed: boolean
  pingAttempts: number
  onSupply: boolean
  status?: string
  isDb?: boolean
}

export interface SmartMeterSubmitData {
  CorrelationID: string
  IsSmart: boolean
  OnSupply: boolean
  SmartPingEnabled: boolean
  PingAllowed: boolean
  Status: string
}
