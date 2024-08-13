'use client'
import { useContentfulInspectorMode } from '@contentful/live-preview/react'

import { CtfAsset } from '@src/components/features/ctf-components/ctf-asset/CtfAsset'
import { PersonFieldsFragment } from '@src/components/features/ctf-components/ctf-person/__generated/ctf-person.generated'
import { CtfRichtext } from '@src/components/features/ctf-components/ctf-richtext/CtfRichtext'

interface CardLeadershipPropsInterface extends PersonFieldsFragment {
  previousComponent: string | null
}

export const CardLeadership = (props: CardLeadershipPropsInterface) => {
  const {
    name,
    bio,
    avatar,
    previousComponent,
    sys: { id: entryId }
  } = props
  const nameSplit = name?.split(', ')

  const inspectorMode = useContentfulInspectorMode({ entryId })

  return (
    <div>
      {avatar && (
        <div {...inspectorMode({ fieldId: 'avatar' })}>
          <CtfAsset {...avatar} showDescription={false} />
        </div>
      )}
      <div>
        <div {...inspectorMode({ fieldId: 'name' })}>
          {nameSplit && (
            <>
              {nameSplit[0] && <p>{nameSplit[0]}</p>}
              {nameSplit.length === 2 && <p style={{ fontSize: '1.8rem' }}>{nameSplit[1]}</p>}
            </>
          )}
        </div>
        {bio && (
          <div {...inspectorMode({ fieldId: 'bio' })}>
            <CtfRichtext {...bio} />
          </div>
        )}
      </div>
    </div>
  )
}
