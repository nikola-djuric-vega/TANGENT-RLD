import React from 'react'
import { BaseIconProps } from '_types/local'

const Tick = ({ baseColour, className, size, flip }: BaseIconProps) => {
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
        d="M2 8L6 12L14 4"
        {...(baseColour && { stroke: '#313548' })}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Tick
