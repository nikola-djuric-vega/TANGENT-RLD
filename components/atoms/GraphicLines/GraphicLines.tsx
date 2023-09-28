export enum LinesPosition {
  TOP,
  BOTTOM,
}

export enum LinesColor {
  BLUE = '#4E52BE',
  ORANGE = '#FF7A18',
  WHITE = '#FFFFFF',
}

export interface GraphicLinesProps extends React.HTMLAttributes<SVGElement> {
  position: LinesPosition
  colour?: LinesColor
  topLineLength?: number
  bottomLineLength?: number
}

const GraphicLines = ({
  colour = LinesColor.WHITE,
  bottomLineLength,
  topLineLength,
  position,
  ...props
}: GraphicLinesProps) => {
  const svgWidth = () => {
    if (!!topLineLength && !!bottomLineLength) {
      return topLineLength >= bottomLineLength
        ? topLineLength
        : bottomLineLength
    } else if (!!topLineLength) {
      return topLineLength
    } else if (!!bottomLineLength) {
      return bottomLineLength
    } else {
      return 364
    }
  }

  switch (position) {
    case LinesPosition.TOP:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ maxWidth: svgWidth() }}
          viewBox={`0 0 ${svgWidth()} 36`}
          preserveAspectRatio="none"
          width="100%"
          height="36"
          fill="none"
          {...props}
        >
          <path
            stroke="url(#paint0_linear_183_5105)"
            d={`M42 2H${topLineLength || 362}`}
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="3"
          />
          <path
            d={`M2 34L${bottomLineLength || 106} 34`}
            stroke="url(#paint1_linear_183_5105)"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="3"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              x1={topLineLength || 301.592}
              id="paint0_linear_183_5105"
              y1="1.99939"
              x2="40.5324"
              y2="1.87797"
            >
              <stop stopColor={colour} stopOpacity="0" />
              <stop offset="0.9375" stopColor={colour} stopOpacity="0.4" />
            </linearGradient>
            <linearGradient
              x2={`${bottomLineLength || 97}`}
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_183_5105"
              x1="-5.6394"
              y1="34"
              y2="34"
            >
              <stop stopColor={colour} stopOpacity="0" />
              <stop offset="1" stopColor={colour} stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
      )
    case LinesPosition.BOTTOM:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ maxWidth: svgWidth() }}
          viewBox={`0 0 ${svgWidth()} 36`}
          preserveAspectRatio="none"
          width="100%"
          height="36"
          fill="none"
          {...props}
        >
          <path
            d={`M2 2L${topLineLength || 106} 2.00001`}
            stroke="url(#paint0_linear_183_5110)"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="3"
          />
          <path
            d={`M42 34H${bottomLineLength || 362}`}
            stroke="url(#paint1_linear_183_5110)"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="3"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              x2={topLineLength || 88.1169}
              id="paint0_linear_183_5110"
              x1="-5.6394"
              y2="2.00001"
              y1="2"
            >
              <stop stopColor={colour} stopOpacity="0" />
              <stop offset="1" stopColor={colour} stopOpacity="0.4" />
            </linearGradient>
            <linearGradient
              x1={bottomLineLength || 301.592}
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_183_5110"
              y1="33.9994"
              x2="40.5324"
              y2="33.878"
            >
              <stop stopColor={colour} stopOpacity="0" />
              <stop offset="0.9375" stopColor={colour} stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
      )
  }
}

export default GraphicLines
