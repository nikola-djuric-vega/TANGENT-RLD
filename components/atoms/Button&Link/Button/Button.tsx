import { ButtonColors, ButtonAppearance, ButtonLayout } from '_types/CMS'
import React, { ReactNode, forwardRef } from 'react'
import styles from '../Button&Link.module.scss'
import { IconNames } from '_types/local'
import isString from 'lodash/isString'
import Icon from '_atoms/Icon/Icon'
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  ref?: React.RefObject<HTMLButtonElement>
  appearance: ButtonAppearance
  children: ReactNode | string
  layout?: ButtonLayout
  color?: ButtonColors
  className?: string
  icon?: IconNames
}

const Button = forwardRef(
  (
    {
      appearance = ButtonAppearance.PRIMARY,
      color = ButtonColors.LIGHT,
      layout = ButtonLayout.LTR,
      className,
      children,
      icon,
      ...props
    }: ButtonProps,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <button
        className={`button-reset ${
          appearance === ButtonAppearance.DEFAULT ? '' : styles.button
        } ${className}`}
        data-appearance={appearance}
        data-color={color}
        ref={ref}
        {...props}
      >
        {isString(children) && appearance !== ButtonAppearance.BLANK ? (
          <span className={styles.buttonLink} data-layout={layout}>
            {icon && <Icon name={icon} />}
            {children}
          </span>
        ) : (
          children
        )}
      </button>
    )
  }
)
Button.displayName = 'Button'
export default Button
