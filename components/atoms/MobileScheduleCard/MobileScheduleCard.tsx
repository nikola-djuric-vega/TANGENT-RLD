import React from 'react'
import styles from './MobileScheduleCard.module.scss'
import Heading from '_atoms/Heading/Heading'
import { ScheduleCardProps } from '_types/data'
import { checkDay } from '_utils/blocks-parsing-helpers'

const MobileScheduleCard = ({ confirmed, day, periods }: ScheduleCardProps) => {
  return (
    <div className={styles.container}>
      <Heading className={styles.cardTitle} level={4}>
        {day.split(' ')[0]} {checkDay(day.split(' ')[1])} (
        {confirmed ? 'Confirmed' : 'Possible'})
      </Heading>

      <div
        className={`${styles.cardWrapper} ${confirmed ? styles.confirmed : ''}`}
      >
        {Boolean(periods?.length) &&
          periods?.map((time, index) => (
            <p key={index} className={styles.cardTime}>
              {time}
            </p>
          ))}
      </div>
    </div>
  )
}

export default MobileScheduleCard
