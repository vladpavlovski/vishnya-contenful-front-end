import React from 'react'

type Props = {
  className?: string
  children?: React.ReactNode | React.ReactNode[]
}

export const PageContainer = (props: Props) => {
  return <div className={props.className}>{props.children}</div>
}
