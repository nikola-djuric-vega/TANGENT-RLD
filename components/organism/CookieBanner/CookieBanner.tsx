import React from 'react'
import Button from '_atoms/Button&Link/Button/Button'
import styles from './CookieBanner.module.scss'
import { ButtonAppearance, ButtonColors } from '_types/CMS'
import {
  RLDBlobGlobalData,
  useRLDBlobGlobalData,
} from '_context/rld-blob-global-data'

interface CookieBannerProps {
  handleAgree(): void
  handleDeny(): void
  visible: boolean
}

const CookieBanner = ({
  handleAgree,
  handleDeny,
  visible,
}: CookieBannerProps) => {
  const { microSiteData } = useRLDBlobGlobalData() as RLDBlobGlobalData
  return (
    <div className={`${styles.cookieWrapper} ${!visible ? styles.hidden : ''}`}>
      <div className={styles.cookieContainer}>
        <div className={styles.cookieContent}>
          <p className={styles.cookieContentText} tabIndex={0}>
            {microSiteData?.cookieBanner?.message?.preLinkText}{' '}
            <span>
              <a
                href="https://www.ukpowernetworks.co.uk/cookie-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cookie Policy
              </a>
            </span>
            {'. '}
            {microSiteData?.cookieBanner?.message?.postLinkText}
          </p>
          <div className={styles.cookieContentButtons}>
            <Button
              className={styles.cookieButton}
              appearance={ButtonAppearance.PRIMARY}
              onClick={() => handleAgree()}
              type="button"
            >
              Accept
            </Button>
            <Button
              className={styles.cookieButton}
              appearance={ButtonAppearance.SECONDARY}
              color={ButtonColors.DARK}
              onClick={() => handleDeny()}
              type="button"
            >
              Reject
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CookieBanner
