import React from 'react'
import styles from './DesktopScheduleSidebar.module.scss'

const sidebarProps = [
  '00:30',
  '03:30',
  '06:30',
  '09:30',
  '12:30',
  '15:30',
  '18:30',
  '21:30',
  '*00:30',
]

const DesktopScheduleSidebar = () => {
  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.gridContainer}>
        {sidebarProps.map((prop) => (
          <span key={prop} className={styles.gridElement}>
            {prop}
          </span>
        ))}
      </div>
    </div>
  )
}

export default DesktopScheduleSidebar
