import React from 'react';

import { Avatar } from '@src/components/features/avatar';
import { PersonFieldsFragment } from '@src/components/features/ctf-components/ctf-person/__generated/ctf-person.generated';

interface AuthorPropsInterface extends PersonFieldsFragment {}

export const Author = (props: AuthorPropsInterface) => {
  const { name, avatar } = props;

  return (
    <div>
      {avatar && (
        <div className={''} style={{ display: 'inline-block', width: '11.4rem' }}>
          <Avatar asset={avatar} />
        </div>
      )}
      {name && (
        <p
          className={''}
          style={{
            fontSize: '2.5rem',
            lineHeight: 1.52,
            marginBottom: 0,
            marginTop: '3rem',
          }}
        >
          {name}
        </p>
      )}
    </div>
  );
};
