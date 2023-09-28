import React from 'react'
import styles from './MobileSchedule.module.scss'
import MobileScheduleHeader from '_atoms/MobileScheduleHeader/MobileScheduleHeader'
import SelectActiveBlockTab from '_atoms/SelectActiveBlockTab/SelectActiveBlockTab'
import MobileScheduleCard from '_atoms/MobileScheduleCard/MobileScheduleCard'
import { MobileScheduleProps, SelectActiveBlockTabProps } from '_types/data'

export interface CompleteMobileScheduleProps
  extends MobileScheduleProps,
    SelectActiveBlockTabProps {}

const MobileSchedule = ({
  weeklyScheduleData,
  mobileScheduleData,
  blocks,
  activeBlock,
  setActiveBlock,
}: CompleteMobileScheduleProps) => {
  return (
    <div className={styles.containerFullW}>
      <div className={styles.containerMain}>
        <div className={styles.containerInner}>
          {blocks !== undefined && blocks?.length > 1 && (
            <SelectActiveBlockTab
              blocks={blocks}
              activeBlock={activeBlock}
              setActiveBlock={setActiveBlock}
              isMobile
            />
          )}

          {mobileScheduleData && (
            <MobileScheduleHeader
              titleText={mobileScheduleData.titleText}
              subTitleText={mobileScheduleData.subTitleText}
            />
          )}
          {Boolean(weeklyScheduleData?.length) &&
            weeklyScheduleData
              ?.filter((item) => item.periods[0] !== '-')
              ?.map((day) => <MobileScheduleCard key={day.day} {...day} />)}
        </div>
      </div>
    </div>
  )
}

export default MobileSchedule
