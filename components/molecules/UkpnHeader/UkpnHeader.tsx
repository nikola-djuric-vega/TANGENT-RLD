import React, { useEffect, useState } from 'react'
import styles from './UkpnHeader.module.scss'
import debounce from 'lodash/debounce'
import Link from '_atoms/Button&Link/Link/Link'
import { ButtonAppearance, ButtonColors, LinkAppearance } from '_types/CMS'
import { IconNames } from '_types/local'
import Button from '_atoms/Button&Link/Button/Button'
import { useRouter } from 'next/router'

export interface HeaderProps {
  imageMobileUrl: string
  imageDesktopUrl: string
  isSchedule?: boolean
}

const UkpnHeader = ({
  imageDesktopUrl,
  imageMobileUrl,
  isSchedule,
}: HeaderProps) => {
  const [isMobile, setIsMobile] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const updateMobile = debounce(
      () => setIsMobile(window.innerWidth < 768 ? true : false),
      150
    )
    updateMobile()
    window.addEventListener('resize', updateMobile, { passive: true })
    return () => {
      window.removeEventListener('resize', updateMobile)
    }
  }, [])

  const handleShare = async () => {
    const { blockLetter } = router.query

    if (!navigator.share) {
      alert('Your browser does not support share functionality!')
    }
    const url = document.location.href

    try {
      await navigator.share({
        title: `Block ${
          typeof blockLetter === 'string' &&
          blockLetter.toUpperCase()?.split('-').join(',')
        } disconnections schedule`,
        url,
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <nav className={styles.header} role="group" aria-label="Website header">
      <div className={styles.wrapper}>
        <Link appearance={LinkAppearance.BLANK} url="/" tabIndex={0}>
          {isMobile ? (
            <img
              title="UK Power Network"
              src={imageMobileUrl}
              width={98}
              height={32}
              alt="logo"
            />
          ) : (
            <img
              title="UK Power Network"
              src={imageDesktopUrl}
              width={134}
              height={44}
              alt="logo"
            />
          )}
        </Link>

        {isSchedule && isMobile && (
          <Button
            appearance={ButtonAppearance.SECONDARY}
            color={ButtonColors.DARK_BLUE}
            icon={IconNames.SIXTEEN_PX_SHARE}
            className={styles.shareButton}
            onClick={handleShare}
            tabIndex={0}
          >
            Share
          </Button>
        )}
      </div>
    </nav>
  )
}

export default UkpnHeader
