import React from 'react'

import { PersonFieldsFragment } from './__generated/ctf-person.generated'

import { CardLeadership } from '@src/components/features/card-leadership'
import { CardPerson } from '@src/components/features/card-person/CardPerson'

interface CtfPersonPropsInterface extends PersonFieldsFragment {
  previousComponent: string | null
}

export const CtfPerson = (props: CtfPersonPropsInterface) => {
  const isLeadership = props.cardStyle === false

  return (
    <div className={''} style={{ maxWidth: '100%', padding: 0 }}>
      <div className={''}>
        {isLeadership ? <CardLeadership {...props} /> : <CardPerson {...props} />}
      </div>
    </div>
  )
}
