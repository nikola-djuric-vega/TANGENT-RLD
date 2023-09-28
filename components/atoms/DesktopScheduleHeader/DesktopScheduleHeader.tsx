import React from 'react'
import Heading from '_atoms/Heading/Heading'
import styles from './DesktopScheduleHeader.module.scss'
import { DesktopScheduleHeaderProps } from '_types/data'

const DesktopScheduleHeader = ({
  date,
  info: { firstOption, secondOption },
}: DesktopScheduleHeaderProps) => {
  return (
    <div className={styles.container}>
      {date && (
        <Heading className={styles.headerTitle} level={2}>
          {date}
        </Heading>
      )}
      <div className={styles.headerInfo}>
        {firstOption && (
          <p className={`${styles.options} ${styles[firstOption]}`}>
            <span className={styles.textCapitalize}>{firstOption}</span>{' '}
            disconnections
          </p>
        )}

        {secondOption && (
          <p className={`${styles.options} ${styles[secondOption]}`}>
            <span>
              <span className={styles.textCapitalize}>{secondOption}</span>{' '}
              disconnections
            </span>
          </p>
        )}
      </div>
    </div>
  )
}

export default DesktopScheduleHeader
