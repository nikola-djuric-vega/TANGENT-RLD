import styles from './NotCoveredDarkBlueBanner.module.scss'
import React from 'react'
import AddressLookUp from '_atoms/AddressLookUp/AddressLookUp'
import { useRLDGlobalData } from '_context/rld-global-data'
import NotCoveredMessageBox from '_atoms/NotCoveredMessageBox/NotCoveredMessageBox'

const NotCoveredDarkBlueBanner = () => {
  const {
    data: { landingPageData },
  } = useRLDGlobalData()
  return (
    <div className={styles.notCoveredWrapper}>
      <div className={styles.notCoveredContainer}>
        <div className={styles.notCoveredSearchInput}>
          <AddressLookUp
            placeholder={landingPageData.blueSearchPlaceholder}
            id="search-shedule-by-postcode"
          />
        </div>
      </div>
      <div className={styles.notCoveredBox}>
        <NotCoveredMessageBox />
      </div>
    </div>
  )
}

export default NotCoveredDarkBlueBanner
