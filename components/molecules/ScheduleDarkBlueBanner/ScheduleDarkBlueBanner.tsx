import React from 'react'
import Heading from '_atoms/Heading/Heading'
import styles from './ScheduleDarkBlueBanner.module.scss'
import { ScheduleDarkBlueBannerProps } from '_types/data'
import Link from '_atoms/Button&Link/Link/Link'
import GraphicLines, {
  LinesPosition,
  LinesColor,
} from '_atoms/GraphicLines/GraphicLines'
import { ButtonColors, LinkAppearance } from '_types/CMS'
import AddressLookUp from '_atoms/AddressLookUp/AddressLookUp'
import { useRLDGlobalData } from '_context/rld-global-data'

const ScheduleDarkBlueBanner = ({
  bannerTitle,
  bannerText,
  linkInfo,
}: ScheduleDarkBlueBannerProps) => {
  const {
    data: { landingPageData },
  } = useRLDGlobalData()
  return (
    <div className={styles.container}>
      <div className={styles.searchInput}>
        <AddressLookUp
          placeholder={landingPageData.blueSearchPlaceholder}
          id="search-shedule-by-postcode"
        />
      </div>

      {bannerTitle && (
        <Heading className={styles.bannerTitle} level={2}>
          {bannerTitle}
        </Heading>
      )}
      {bannerText && <p className={styles.bannerText}>{bannerText}</p>}

      {linkInfo && (
        <div className={styles.linkContainer}>
          <Link
            appearance={LinkAppearance.BACK}
            color={ButtonColors.GREY}
            url={linkInfo.href}
            skipUrlTransform
          >
            {linkInfo.text}
          </Link>
        </div>
      )}

      <GraphicLines
        position={LinesPosition.BOTTOM}
        className={styles.linesBottom}
        colour={LinesColor.BLUE}
        bottomLineLength={444}
        topLineLength={104}
        role="graphic"
      />
    </div>
  )
}

export default ScheduleDarkBlueBanner
