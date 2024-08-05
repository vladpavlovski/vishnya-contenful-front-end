import React from 'react'

import { Avatar } from '@src/components/features/avatar/Avatar'
import { PersonFieldsFragment } from '@src/components/features/ctf-components/ctf-person/__generated/ctf-person.generated'

export const Author = (props: PersonFieldsFragment) => {
  const { name, avatar } = props

  return (
    <div>
      {avatar && (
        <div className={''} style={{ display: 'inline-block', width: '11.4rem' }}>
          <Avatar asset={avatar} />
        </div>
      )}
      {name && <p>{name}</p>}
    </div>
  )
}
