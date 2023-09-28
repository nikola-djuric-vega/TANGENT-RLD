import { IconNames, IconProps } from '_types/local'
import ChevronDown from '_svgs/ChevronDown'
import ChevronRight from '_svgs/ChevronRight'
import ChevronRightOrange from '_svgs/ChevronRightOrange'
import Clear from '_svgs/Clear'
import Close from '_svgs/Close'
import PlannedPC from '_svgs/PlannedPC'
import Search from '_svgs/Search'
import Share from '_svgs/Share'
import Tick from '_svgs/Tick'

const renderIcon = (props: IconProps) => {
  switch (props.name) {
    case IconNames.SIXTEEN_PX_CHEVRON_DOWN:
      return <ChevronDown {...props} />

    case IconNames.SIXTEEN_PX_CHEVRON_RIGHT:
      return <ChevronRight {...props} />

    case IconNames.SIXTEEN_PX_CHEVRON_RIGHT_ORANGE:
      return <ChevronRightOrange {...props} />

    case IconNames.SIXTEEN_PX_CLEAR:
      return <Clear {...props} />

    case IconNames.SIXTEEN_PX_CLOSE:
      return <Close {...props} />

    case IconNames.SIXTEEN_PX_SEARCH:
      return <Search {...props} />

    case IconNames.SIXTEEN_PX_SHARE:
      return <Share {...props} />

    case IconNames.SIXTEEN_PX_TICK:
      return <Tick {...props} />

    case IconNames.TWENTYFOUR_PX_PLANNED_PC:
      return <PlannedPC {...props} />

    default:
      return null
  }
}

export default renderIcon
