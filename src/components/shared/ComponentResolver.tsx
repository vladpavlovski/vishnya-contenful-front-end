import React from 'react'

import { DEFAULT_LOCALE } from '@src/lib/locales'
import { componentGqlMap, componentMap } from '@src/mappings'

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

  const shouldForceGql = (() => {
    if (props.forceGql === true) {
      return true
    }

    if (!ComponentGql) {
      return false
    }

    if (Object.keys(componentProps).length > 3) {
      // We expect components with no fragments set up to only contain 2 object
      // props. If there are more, it means we are providing fragments manually
      return false
    }

    if (componentProps.__typename === undefined || componentProps.sys === undefined) {
      // We expect exactly these keys to be present in the returned props if the
      // fragment was not specified for this component
      return false
    }

    return true
  })()

  const Component = !shouldForceGql && componentMap[componentProps.__typename]

  const previousComponentProp = previousComponent

  previousComponent = componentProps.__typename

  if (!Component && !ComponentGql) {
    return null
  }

  return (
    <div className={componentProps.__typename}>
      {Component ? (
        <Component
          {...componentProps}
          locale={locale}
          className={props.className}
          previousComponent={previousComponentProp}
        />
      ) : (
        <ComponentGql
          id={componentProps.sys.id}
          __typename={componentProps.__typename}
          className={props.className}
          preview={previewActive}
          locale={locale}
          previousComponent={previousComponentProp}
        />
      )}
    </div>
  )
}
