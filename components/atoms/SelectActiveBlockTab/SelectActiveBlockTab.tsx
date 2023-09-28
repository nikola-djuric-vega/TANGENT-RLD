import React from 'react'
import { SelectActiveBlockTabProps } from '_types/data'
import styles from './SelectActiveBlockTab.module.scss'

const SelectActiveBlockTab = ({
  blocks,
  activeBlock,
  setActiveBlock,
  isMobile,
}: SelectActiveBlockTabProps) => {
  const handleClick = (block: string) => {
    setActiveBlock(block)
  }

  return (
    <div
      className={`${styles.container} ${
        isMobile ? styles.mobileContainer : styles.desktopContainer
      }`}
    >
      {Boolean(blocks?.length) &&
        blocks?.map((block) => (
          <button
            key={block}
            className={`${styles.blockBtn} ${
              isMobile ? styles.mobileBtn : ''
            } ${activeBlock === block ? styles.active : ''}`}
            onClick={() => handleClick(block)}
          >
            {isMobile ? block.toUpperCase() : `Block ${block.toUpperCase()}`}
          </button>
        ))}
    </div>
  )
}

export default SelectActiveBlockTab
