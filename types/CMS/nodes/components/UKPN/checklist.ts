import { ComponentsTypeName } from '_types/CMS'
import { IconNames } from '_types/local'

export interface ChecklistType {
  __typename: ComponentsTypeName.CHECKLIST
  title?: string
  icon?: IconNames
  checklistItems?: string[]
}
