import React from 'react'

interface ConditionalWrapperProps {
  condition: boolean
  wrapper: (children: React.ReactElement) => JSX.Element
  children: React.ReactElement
  elseWrapper?: (children: React.ReactElement) => JSX.Element
}

const ConditionalWrapper = ({
  condition,
  wrapper,
  children,
  elseWrapper,
}: ConditionalWrapperProps) => {
  return condition
    ? wrapper(children)
    : elseWrapper
    ? elseWrapper(children)
    : children
}

export default ConditionalWrapper
