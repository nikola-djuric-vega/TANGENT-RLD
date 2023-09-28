import { CorePageProperties, PageTypeNames } from '..'
import {
  NotificationType,
  PowerCutComponentType,
} from '../nodes/components/UKPN'

export type PowerCutComponents = PowerCutComponentType | NotificationType

export interface PowerCutPage extends CorePageProperties {
  __typename: PageTypeNames.POWER_CUT
  components: PowerCutComponents[]
  name: string
  url: string
}
