import renderIcon from '_hoc/RenderIcon/RenderIcon'
import { IconProps } from '_types/local'
import styles from './Icon.module.scss'
import dynamic from 'next/dynamic'

const DynamicRenderIcon = dynamic(() =>
  import('_hoc/RenderIcon/RenderIcon').then((renderIcon) => renderIcon as any)
) as typeof renderIcon

const Icon = (props: IconProps) => {
  return <DynamicRenderIcon className={styles.icon} {...props} />
}

export default Icon
