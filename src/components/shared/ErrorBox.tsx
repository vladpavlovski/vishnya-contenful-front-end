import React from 'react'

interface Props {
  className?: string
  children?: any
}

export const ErrorBox = (props: Props) => {
  return (
    <div className={''}>
      <p className={''}>{props.children}</p>
    </div>
  )
}
