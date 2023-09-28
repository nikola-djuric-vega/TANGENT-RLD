import React from 'react'
import styles from './DesktopScheduleCard.module.scss'
import { ScheduleCardProps } from '_types/data'
import { gridElementPosition } from '_utils/grid-element-position'
import { checkDay } from '_utils/blocks-parsing-helpers'

const DesktopScheduleCard = ({
  day,
  periods,
  confirmed,
}: ScheduleCardProps) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardHeader}>
        {day && (
          <span>{`${day.split(' ')[0]} ${checkDay(day.split(' ')[1])}`}</span>
        )}
        <p className={styles.cardSubTitle}>
          {confirmed ? '(Confirmed)' : '(Possible)'}
        </p>
      </div>
      <div className={styles.gridContainer}>
        {Boolean(periods?.length) &&
          periods?.map((period) => (
            <div
              key={period}
              className={`${styles.gridElement} ${
                confirmed ? styles.confirmed : styles.possible
              }`}
              style={{
                gridRow: `${gridElementPosition(
                  period.split('-')[0]
                )} / ${gridElementPosition(period.split('-')[1], true)}`,
              }}
            >
              {period}
            </div>
          ))}
      </div>
    </div>
  )
}

export default DesktopScheduleCard
