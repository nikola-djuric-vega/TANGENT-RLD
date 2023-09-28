export interface Option {
  value: string | string[]
  label: string
  isDisabled?: boolean
  isSelected?: boolean
  id?: string
}

export enum ITelemetryItemBaseType {
  PAGE_VIEW_DATA = 'PageviewData',
  REMOTE_DEPENDENCY_DATA = 'RemoteDependencyData',
  PAGE_VIEW_PERFORMANCE_DATA = 'PageviewPerformanceData',
}
