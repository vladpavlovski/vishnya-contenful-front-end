import React from 'react'

import { DEFAULT_LOCALE } from '@src/lib/locales'
import { componentGqlMap } from '@src/mappings'

let previousComponent: string | null = null
interface Props {
  componentProps: {
    sys: { id: string }
    __typename: string
    [k: string]: any
  }

  /**
   * forces to do a graphql request to get its content, instead
   * of expecting content is provided trough `props.componentProps`:
   */
  forceGql?: boolean
  className?: string
  inline?: boolean
}

export const ComponentResolver = (props: Props) => {
  const { componentProps } = props

  const previewActive = false
  const locale = DEFAULT_LOCALE
  const ComponentGql = componentGqlMap[componentProps.__typename]

  const previousComponentProp = previousComponent

  previousComponent = componentProps.__typename

  if (!ComponentGql) {
    return null
  }

  return (
    <div className={componentProps.__typename}>
      <ComponentGql
        id={componentProps.sys.id}
        __typename={componentProps.__typename}
        className={props.className}
        preview={previewActive}
        locale={locale}
        previousComponent={previousComponentProp}
      />
    </div>
  )
}
