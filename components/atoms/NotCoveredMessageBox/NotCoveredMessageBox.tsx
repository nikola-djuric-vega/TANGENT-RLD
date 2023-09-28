import React from 'react'
import Heading from '_atoms/Heading/Heading'
import {
  RLDBlobGlobalData,
  useRLDBlobGlobalData,
} from '_context/rld-blob-global-data'
import styles from './NotCoveredMessageBox.module.scss'

const NotCoveredMessageBox = () => {
  const { microSiteData } = useRLDBlobGlobalData() as RLDBlobGlobalData

  return (
    <div className={styles.notCoveredContainer}>
      <Heading level={3} className={styles.notCoveredHeading}>
        {microSiteData?.notPartOfSchedulePage?.heading}
      </Heading>
      <p className={styles.notCoveredTitle}>
        This may be for one of the following reasons:
      </p>
      <ol className={styles.notCoveredList}>
        <li className={styles.notCoveredText}>
          <span>
            We may not be your electricity Network operator. You can find out
            your operator by{' '}
          </span>
          <span>
            <a
              href="https://www.powercut105.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              visiting ‘Power cut 105
            </a>
          </span>
          <span>
            {' '}
            where you’ll also be able to find your block number and rotation
            schedule.
          </span>
        </li>
        <li className={styles.notCoveredText}>
          Your postcode is part of a new build area which hasn’t been added on
          to our database.
        </li>
      </ol>
    </div>
  )
}

export default NotCoveredMessageBox
