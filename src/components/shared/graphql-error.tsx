import React, { useMemo } from 'react';

import { tryget } from '@src/utils';

export const GraphqlError = (props: { error: any }) => {
  const { error } = props;
  console.error({ error });

  const networkErrors = useMemo(() => tryget(() => error.networkError.result.errors), [error]);

  return (
    <div className={''} style={{ padding: '16px', color: '#f44336', border: '1px solid #f44336' }}>
      <h3 className={''}>{error.message}</h3>

      {networkErrors && (
        <div className={''} style={{ margin: '16px 0' }}>
          <h4 className={''}>Network Errors</h4>
          {networkErrors.map((err, i) => (
            <p className={''} key={i}>
              {err.message}
            </p>
          ))}
        </div>
      )}

      {error.graphQLErrors && error.graphQLErrors.length > 0 && (
        <div className={''} style={{ margin: '16px 0' }}>
          <h4 className={''}>GraphQl Errors</h4>
          {error.graphQLErrors.map((err, i) => (
            <div className={''} style={{ margin: '16px 0' }} key={i}>
              <p className={''}>{err.message}</p>
              <p className={''}>{`path: ${err.path.join('/')}`}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
