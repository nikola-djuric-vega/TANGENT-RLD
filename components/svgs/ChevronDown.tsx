import React from 'react'
import { BaseIconProps } from '_types/local'

const ChevronDown = ({ baseColour, className, size, flip }: BaseIconProps) => {
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
        d="M13 6L8 11L3 6"
        {...(baseColour && { stroke: '#313548' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ChevronDown
