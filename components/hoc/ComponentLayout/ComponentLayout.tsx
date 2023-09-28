import styles from './ComponentLayout.module.scss'
import { ReactNode } from 'react'

export interface ComponentLayoutProps {
  outsideGridElementsDown?: ReactNode
  outsideGridElementsUp?: ReactNode
  removeBottomMargin?: boolean
  removeGridPadding?: boolean
  containerClass?: string
  innerClass?: string
  children: ReactNode
}

const ComponentLayout = ({
  removeBottomMargin = false,
  removeGridPadding = false,
  outsideGridElementsDown,
  outsideGridElementsUp,
  containerClass,
  innerClass,
  children,
  ...props
}: ComponentLayoutProps) => {
  return (
    <section
      className={`${styles.componentLayout}  ${
        containerClass ? containerClass : ''
      }`}
      data-remove-bottom-margin={removeBottomMargin}
      {...props}
    >
      {!!outsideGridElementsUp && outsideGridElementsUp}
      <div
        className={`${styles.inner} ${innerClass ? innerClass : ''}`}
        data-remove-grid-padding={removeGridPadding}
      >
        {children}
      </div>
      {!!outsideGridElementsDown && outsideGridElementsDown}
    </section>
  )
}

export default ComponentLayout
