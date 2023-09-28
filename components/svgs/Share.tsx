import React from 'react'
import { BaseIconProps } from '_types/local'

const Share = ({ baseColour, className, size, flip }: BaseIconProps) => {
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
      <g clipPath="url(#clip0_53_2215)">
        <path
          d="M3 10C4.10457 10 5 9.10457 5 8C5 6.89543 4.10457 6 3 6C1.89543 6 1 6.89543 1 8C1 9.10457 1.89543 10 3 10Z"
          {...(baseColour && { stroke: '#313548' })}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13 5C14.1046 5 15 4.10457 15 3C15 1.89543 14.1046 1 13 1C11.8954 1 11 1.89543 11 3C11 4.10457 11.8954 5 13 5Z"
          {...(baseColour && { stroke: '#313548' })}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13 15C14.1046 15 15 14.1046 15 13C15 11.8954 14.1046 11 13 11C11.8954 11 11 11.8954 11 13C11 14.1046 11.8954 15 13 15Z"
          {...(baseColour && { stroke: '#313548' })}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 7L11 4"
          {...(baseColour && { stroke: '#313548' })}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 9L11 12"
          {...(baseColour && { stroke: '#313548' })}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_53_2215">
          <rect
            width="16"
            height="16"
            {...(baseColour ? { fill: 'white' } : { fill: 'currentColor' })}
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Share
