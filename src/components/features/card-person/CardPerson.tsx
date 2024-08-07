import React from 'react'

import { Avatar } from '@src/components/features/avatar/Avatar'
import { PersonFieldsFragment } from '@src/components/features/ctf-components/ctf-person/__generated/ctf-person.generated'
import { CtfRichtext } from '@src/components/features/ctf-components/ctf-richtext/CtfRichtext'

export const CardPerson = ({ name, bio, avatar }: PersonFieldsFragment) => {
  return (
    <div className={''} style={{ display: 'flex' }}>
      {avatar && (
        <div
          className={''}
          style={{
            flexShrink: 0,
            marginRight: '13rem',
            width: '10rem'
          }}
        >
          <Avatar asset={avatar} />
        </div>
      )}
      <div>
        {name && (
          <p
            className={''}
            style={{
              fontSize: '1.8rem',
              lineHeight: 1.333,
              marginBottom: '2rem',
              marginTop: 0
            }}
          >
            {name}
          </p>
        )}
        {bio && (
          <div>
            <CtfRichtext {...bio} className={''} />
          </div>
        )}
      </div>
    </div>
  )
}
