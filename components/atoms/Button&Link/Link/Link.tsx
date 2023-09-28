import ConditionalWrapper from '_hoc/ConditionalWrapper/ConditionalWrapper'
import { ButtonColors, ButtonLayout, LinkAppearance } from '_types/CMS'
import styles from '../Button&Link.module.scss'
import React, { ReactNode } from 'react'
import { IconNames } from '_types/local'
import { useRouter } from 'next/router'
import isString from 'lodash/isString'
import { transformUrl } from '_utils'
import Icon from '_atoms/Icon/Icon'
import NextLink from 'next/link'

export interface LinkProps {
  children: ReactNode | string
  appearance: LinkAppearance
  skipUrlTransform?: boolean
  layout?: ButtonLayout
  color?: ButtonColors
  className?: string
  icon?: IconNames
  title?: string
  url: string
}

const Link = ({
  appearance = LinkAppearance.PRIMARY,
  color = ButtonColors.LIGHT,
  layout = ButtonLayout.LTR,
  skipUrlTransform = false,
  className,
  children,
  title,
  icon,
  url,
  ...props
}: LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const regexAnchor = /^#[^ !@#$%^&*(),.?":{}|<>]*$/gi
  const { asPath } = useRouter()
  const anchorUrl = url.match(regexAnchor) ? asPath.split('#', 1)[0] + url : url
  const hasPrefix = url.includes('tel:') || url.includes('mailto:')

  return (
    <ConditionalWrapper
      condition={!hasPrefix}
      wrapper={(children) => (
        <NextLink href={skipUrlTransform ? anchorUrl : transformUrl(anchorUrl)}>
          {children}
        </NextLink>
      )}
    >
      <a
        {...(!!hasPrefix && { href: url })}
        data-appearance={appearance}
        data-layout={layout}
        data-color={color}
        className={`${
          appearance !== LinkAppearance.BLANK ? styles.button : ''
        } ${className}`}
        {...props}
      >
        {appearance === LinkAppearance.BOXED && (
          <span className={styles.buttonTitle}>{title}</span>
        )}
        {isString(children) && appearance !== LinkAppearance.BLANK ? (
          <span className={styles.buttonLink}>
            {icon && <Icon name={icon} />}
            {children}
          </span>
        ) : (
          children
        )}
      </a>
    </ConditionalWrapper>
  )
}

export default Link
