import React from 'react'
import AddressLookUp from '_atoms/AddressLookUp/AddressLookUp'
import Heading from '_atoms/Heading/Heading'
import styles from './LandingPageDarkBlueBanner.module.scss'
import { useRLDGlobalData } from '_context/rld-global-data'
import BlockLookUp from '_atoms/BlocksLookUp/BlocksLookUp'
import {
  RLDBlobGlobalData,
  useRLDBlobGlobalData,
} from '_context/rld-blob-global-data'

const LandingPageDarkBlueBanner = () => {
  const {
    data: { landingPageData },
  } = useRLDGlobalData()

  const { microSiteData } = useRLDBlobGlobalData() as RLDBlobGlobalData

  return (
    <div className={styles.container}>
      <Heading className={styles.header} level={2} tabIndex={0}>
        {microSiteData?.landingPage?.darkBlueBanner?.heading}
      </Heading>

      <div className={styles.searchInput}>
        <AddressLookUp
          placeholder={landingPageData.blueSearchPlaceholder}
          id="search-shedule-by-postcode"
          isIndexPage
        />
      </div>

      <BlockLookUp
        id="search-shedule-by-block"
        title="Select a block"
        buttonText={landingPageData.blueBlockButton}
      />
    </div>
  )
}

export default LandingPageDarkBlueBanner
