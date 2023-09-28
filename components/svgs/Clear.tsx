import React from 'react'
import { BaseIconProps } from '_types/local'

const Clear = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      data-size={size}
      data-flip={flip}
    >
      <rect
        width="16"
        height="16"
        rx="8"
        {...(baseColour && { fill: '#E0E0E0' })}
      />
      <path
        d="M4.99995 10.9999L10.9999 5.00001"
        {...(baseColour && { stroke: '#757575' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.99996 5.00006L10.9999 11"
        {...(baseColour && { stroke: '#757575' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Clear
