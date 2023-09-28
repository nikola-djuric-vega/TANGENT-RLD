import { ComponentsTypeName, Media } from '_types/CMS'

export interface DangerousSituationType {
  __typename: ComponentsTypeName.DANGEROUS_SITUATION
  dangerousSituationSecondaryButtonText: string
  dangerousSituationPrimaryButtonText: string
  dangerousSituationDescription: string
  setShowForm: (value: boolean) => void
  dangerousInformationHelpText: string
  dangerousInformationTitle: string
  dangerousSituationImages: Media[]
  dangerousSituationTitle: string
  emergencyBoxDescription: string
  callBoxDescription: string
  emergencyBoxTitle: string
  callBoxTitle: string
}
