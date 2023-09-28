import { replaceUkpnG81Prefix } from '_utils/replace-ukpn-g81-prefix'
import styles from './RichText.module.scss'
import { TextSizes } from '_types/CMS'
import React from 'react'

export interface RichTextProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: TextSizes
  text: string
  tabIndex?: number
}

const RichText = ({ text, size, tabIndex = -1, ...props }: RichTextProps) => {
  const result = replaceUkpnG81Prefix(text)
  return (
    <div
      className={styles.richText}
      {...props}
      dangerouslySetInnerHTML={{
        __html: result,
      }}
      {...(size && { 'data-text-size': size })}
      tabIndex={tabIndex}
    />
  )
}

export default RichText
