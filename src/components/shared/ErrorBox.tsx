import React from 'react'

interface Props {
  className?: string
  children?: any
}

export const ErrorBox = (props: Props) => {
  return (
    <div>
      <p>{props.children}</p>
    </div>
  )
}
