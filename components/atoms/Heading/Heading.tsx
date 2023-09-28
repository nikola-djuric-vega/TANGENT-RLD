import React, { ReactNode } from 'react'

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: number
  as?: any
  className?: string
  children?: ReactNode
}

const Heading = ({
  level,
  as: Component = `h${level}`,
  ...props
}: HeadingProps) => {
  return <Component {...props} />
}

export default Heading
