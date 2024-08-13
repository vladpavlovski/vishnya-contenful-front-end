import React, { useMemo } from 'react'

import { tryget } from '@src/utils'

export const GraphqlError = (props: { error: any }) => {
  const { error } = props
  console.error({ error })

  const networkErrors = useMemo(() => tryget(() => error.networkError.result.errors), [error])

  return (
    <div style={{ padding: '16px', color: '#f44336', border: '1px solid #f44336' }}>
      <h3>{error.message}</h3>

      {networkErrors && (
        <div style={{ margin: '16px 0' }}>
          <h4>Network Errors</h4>
          {networkErrors.map((err, i) => (
            <p key={i}>{err.message}</p>
          ))}
        </div>
      )}

      {error.graphQLErrors && error.graphQLErrors.length > 0 && (
        <div style={{ margin: '16px 0' }}>
          <h4>GraphQl Errors</h4>
          {error.graphQLErrors.map((err, i) => (
            <div style={{ margin: '16px 0' }} key={i}>
              <p>{err.message}</p>
              <p>{`path: ${err.path.join('/')}`}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
