'use client'

import { CtfAsset } from '@src/components/features/ctf-components/ctf-asset/CtfAsset'
import { PersonFieldsFragment } from '@src/components/features/ctf-components/ctf-person/__generated/ctf-person.generated'
import { CtfRichtext } from '@src/components/features/ctf-components/ctf-richtext/CtfRichtext'

interface CardLeadershipPropsInterface extends PersonFieldsFragment {
  previousComponent: string | null
}

export const CardLeadership = (props: CardLeadershipPropsInterface) => {
  const { name, bio, avatar } = props
  const nameSplit = name?.split(', ')

  return (
    <div>
      {avatar && (
        <div>
          <CtfAsset {...avatar} showDescription={false} />
        </div>
      )}
      <div>
        <div>
          {nameSplit && (
            <>
              {nameSplit[0] && <p>{nameSplit[0]}</p>}
              {nameSplit.length === 2 && <p style={{ fontSize: '1.8rem' }}>{nameSplit[1]}</p>}
            </>
          )}
        </div>
        {bio && (
          <div>
            <CtfRichtext {...bio} />
          </div>
        )}
      </div>
    </div>
  )
}
