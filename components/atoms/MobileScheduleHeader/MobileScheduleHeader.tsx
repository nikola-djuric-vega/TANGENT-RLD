import Heading from '_atoms/Heading/Heading'
import styles from './MobileScheduleHeader.module.scss'
import { MobileScheduleHeaderProps } from '_types/data'
import React from 'react'

const MobileScheduleHeader = ({
  titleText,
  subTitleText,
}: MobileScheduleHeaderProps) => {
  return (
    <div className={styles.headerContainer}>
      <Heading level={3} className={styles.headerTitle}>
        {titleText}
      </Heading>
      <p className={styles.headerSubTitle}>{subTitleText}</p>
    </div>
  )
}

export default MobileScheduleHeader
