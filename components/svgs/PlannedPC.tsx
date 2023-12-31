import React from 'react'
import { BaseIconProps } from '_types/local'

const PlannedPC = ({ baseColour, className, size, flip }: BaseIconProps) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      data-size={size}
      data-flip={flip}
    >
      <g clipPath="url(#clip0_30_2592)">
        <path
          d="M11.9949 12.2042L10.021 16.1622H13.9789L12.0052 20.1201"
          {...(baseColour && { stroke: '#758BFD' })}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.24138 2.58459H3.85345C3.0311 2.587 2.24313 2.91474 1.66164 3.49623C1.08015 4.07772 0.752407 4.8657 0.75 5.68804V20.4294C0.752407 21.2518 1.08015 22.0397 1.66164 22.6212C2.24313 23.2027 3.0311 23.5305 3.85345 23.5329H20.1466C20.9689 23.5305 21.7569 23.2027 22.3384 22.6212C22.9198 22.0397 23.2476 21.2518 23.25 20.4294V5.68804C23.2476 4.8657 22.9198 4.07772 22.3384 3.49623C21.7569 2.91474 20.9689 2.587 20.1466 2.58459H19.7586"
          {...(baseColour && { stroke: '#27187E' })}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.4482 2.58459H13.5517"
          {...(baseColour && { stroke: '#27187E' })}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.34473 1.03287V4.13632"
          {...(baseColour && { stroke: '#27187E' })}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.6553 1.03287V4.13632"
          {...(baseColour && { stroke: '#27187E' })}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M0.75 8.85785H23.25"
          {...(baseColour && { stroke: '#27187E' })}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_30_2592">
          <rect
            width="24"
            height="24"
            {...(baseColour ? { fill: 'white' } : { fill: 'currentColor' })}
            transform="translate(0 0.282867)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default PlannedPC
