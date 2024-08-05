'use client'
import { useContentfulInspectorMode } from '@contentful/live-preview/react'
import React from 'react'

import { CtfAsset } from '@src/components/features/ctf-components/ctf-asset/ctf-asset'
import { PersonFieldsFragment } from '@src/components/features/ctf-components/ctf-person/__generated/ctf-person.generated'
import { CtfRichtext } from '@src/components/features/ctf-components/ctf-richtext/ctf-richtext'

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
    <div
      className={''}
      style={{
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '93.4rem',
        ...(previousComponent === 'TopicPerson' && {
          marginTop: '7rem'
        })
      }}
    >
      {avatar && (
        <div
          {...inspectorMode({ fieldId: 'avatar' })}
          className={''}
          style={{
            borderRadius: '50%',
            flexShrink: 0,
            marginBottom: '5rem',
            marginRight: '10rem',
            maxWidth: '9.8rem',
            overflow: 'hidden'
          }}
        >
          <CtfAsset {...avatar} showDescription={false} />
        </div>
      )}
      <div>
        <div {...inspectorMode({ fieldId: 'name' })}>
          {nameSplit && (
            <>
              {nameSplit[0] && (
                <p
                  className={''}
                  style={{
                    fontSize: '2.1rem',
                    fontWeight: 500,
                    lineHeight: 1.333,
                    marginBottom: '1rem'
                  }}
                >
                  {nameSplit[0]}
                </p>
              )}
              {nameSplit.length === 2 && (
                <p className={''} style={{ fontSize: '1.8rem' }}>
                  {nameSplit[1]}
                </p>
              )}
            </>
          )}
        </div>
        {bio && (
          <div {...inspectorMode({ fieldId: 'bio' })}>
            <CtfRichtext {...bio} className={''} />
          </div>
        )}
      </div>
    </div>
  )
}
