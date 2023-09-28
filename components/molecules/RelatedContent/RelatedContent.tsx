import { RelatedContentType } from '_types/CMS/nodes/components/UKPN'
import ComponentLayout from '_hoc/ComponentLayout/ComponentLayout'
import styles from './RelatedContent.module.scss'
import CtaRender from '_hoc/CtaRender/CtaRender'
import React from 'react'
import Heading from '_atoms/Heading/Heading'

const RelatedContent = ({ moduleColor, links }: RelatedContentType) => {
  return (
    <ComponentLayout>
      <div className={styles.relatedContent} data-theme={moduleColor}>
        {!!links?.length && (
          <ul className={styles.linksContainer}>
            {links?.map((link, index) => (
              <li key={index} className={styles.linkItem}>
                <div className={styles.textWrapper}>
                  {link?.serviceTitle && (
                    <Heading
                      level={3}
                      className={styles.serviceTitle}
                      tabIndex={0}
                    >
                      {link.serviceTitle}
                    </Heading>
                  )}
                  {link?.serviceCopyText && (
                    <p className={styles.serviceCopyText} tabIndex={0}>
                      {link.serviceCopyText}
                    </p>
                  )}
                </div>
                {!!link?.cTAButton?.length && (
                  <div className={styles.ctasWrapper}>
                    {link.cTAButton.map((cta, index) => (
                      <CtaRender
                        className={styles.cta}
                        color={cta.cTAType}
                        key={index}
                        cta={cta}
                        tabIndex={0}
                      />
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </ComponentLayout>
  )
}

export default RelatedContent
