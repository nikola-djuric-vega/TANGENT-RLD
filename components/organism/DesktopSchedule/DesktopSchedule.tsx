import React from 'react'
import styles from './DesktopSchedule.module.scss'
import DesktopScheduleCard from '_atoms/DesktopScheduleCard/DesktopScheduleCard'
import DesktopScheduleSidebar from '_atoms/DesktopScheduleSidebar/DesktopScheduleSidebar'
import { DesktopScheduleProps, SelectActiveBlockTabProps } from '_types/data'
import DesktopScheduleHeader from '_atoms/DesktopScheduleHeader/DesktopScheduleHeader'
import SelectActiveBlockTab from '_atoms/SelectActiveBlockTab/SelectActiveBlockTab'

export interface CompleteDesktopScheduleProps
  extends DesktopScheduleProps,
    SelectActiveBlockTabProps {}

const DesktopSchedule = ({
  desktopScheduleData,
  weeklyScheduleData,
  blocks,
  activeBlock,
  setActiveBlock,
}: CompleteDesktopScheduleProps) => {
  return (
    <div className={styles.containerFullW}>
      <div className={styles.containerMain}>
        {blocks !== undefined && blocks?.length > 1 && (
          <SelectActiveBlockTab
            blocks={blocks}
            activeBlock={activeBlock}
            setActiveBlock={setActiveBlock}
          />
        )}
        {desktopScheduleData && (
          <DesktopScheduleHeader {...desktopScheduleData} />
        )}

        <div className={styles.scheduleContainer}>
          <DesktopScheduleSidebar />
          {weeklyScheduleData &&
            weeklyScheduleData.map((day) => (
              <DesktopScheduleCard
                key={day.day}
                confirmed={day.confirmed}
                day={day.day}
                periods={day.periods}
              />
            ))}
        </div>
        <span className={styles.footnote}>*00:30 the day after</span>
      </div>
    </div>
  )
}

export default DesktopSchedule
