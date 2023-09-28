import React from 'react'
import { BaseIconProps } from '_types/local'

const Close = ({ baseColour, className, size, flip }: BaseIconProps) => {
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
      <path
        d="M4 11.9999L11.9999 4.00003"
        {...(baseColour && { stroke: '#313548' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 4.00006L11.9999 12"
        {...(baseColour && { stroke: '#313548' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Close
