import UkpnHeader from '_molecules/UkpnHeader/UkpnHeader'
import styles from './Layout.module.scss'
import dynamic from 'next/dynamic'
import { ReactNode } from 'react'

const DynamicUkpnHeader = dynamic(
  () => import('_molecules/UkpnHeader/UkpnHeader')
) as typeof UkpnHeader

export interface LayoutProps {
  children: ReactNode
  isSchedule?: boolean
}

const Layout = ({ children, isSchedule }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <DynamicUkpnHeader
        imageDesktopUrl="/images/g81/ukpn-logo-mobile@2x.jpg"
        imageMobileUrl="/images/g81/ukpn-logo-mobile.jpg"
        isSchedule={isSchedule}
      />
      <main className={styles.main}>{children}</main>
    </div>
  )
}

export default Layout
