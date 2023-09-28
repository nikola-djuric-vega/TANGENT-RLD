import { UsefulLinksType } from '_types/CMS/nodes/components/UKPN'
import { BreadcrumbsItem, CorePageProperties, PageTypeNames } from '../..'

//Add all components used only on T8SsCalculator
export type T8SsCalculatorComponents = UsefulLinksType

export interface T8SsCalculator extends CorePageProperties {
  __typename: PageTypeNames.T8_SS_CALCULATOR
  ancestors: {
    items: BreadcrumbsItem[]
  }
  name: string
  url: string
  components?: T8SsCalculatorComponents[]
}
