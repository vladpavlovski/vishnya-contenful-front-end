'use client'
import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates
} from '@contentful/live-preview/react'
import { useSuspenseQuery } from '@tanstack/react-query'
import React, { useMemo } from 'react'

import { getBusinessInfoOptions } from '@src/components/features/ctf-components/ctf-business-info/CtfBusinessInfoGql'
import { CtfRichtext } from '@src/components/features/ctf-components/ctf-richtext/CtfRichtext'
import { EntryNotFound } from '@src/components/features/errors/EntryNotFound'
import { BusinessInfoFieldsFragment } from '@src/lib/__generated/graphql.types'

const CtfBusinessInfo = ({ id }: { id: string }) => {
  const { data, isLoading } = useSuspenseQuery(getBusinessInfoOptions({ id }))
  const topicBusinessInfo = useContentfulLiveUpdates(
    data.topicBusinessInfo
  ) as BusinessInfoFieldsFragment

  const { body, name, shortDescription, featuredImage } = topicBusinessInfo

  const backgroundImage = useMemo(
    () => (featuredImage ? `${featuredImage.url}?w=1920` : undefined),
    [featuredImage]
  )

  const inspectorMode = useContentfulInspectorMode({ entryId: id })

  if (!data || isLoading) {
    return null
  }
  if (!topicBusinessInfo) {
    return <EntryNotFound />
  }
  console.log({ topicBusinessInfo })
  return (
    <div className={''}>
      {(name || shortDescription) && (
        <div className={''}>
          <div className={''} {...inspectorMode({ fieldId: 'featuredImage' })} />
          <div className={''} style={{ maxWidth: '77rem', margin: '0 auto', textAlign: 'center' }}>
            <div
              className={''}
              style={{ maxWidth: '55rem', padding: '4rem 0', position: 'relative', color: '#fff' }}
            >
              {name && (
                <h1
                  className={''}
                  style={{ fontSize: '4.5rem' }}
                  {...inspectorMode({ fieldId: 'name' })}
                >
                  {name}
                </h1>
              )}
              {shortDescription && (
                <p
                  className={''}
                  style={{ fontSize: '2.5rem', marginTop: '3rem' }}
                  {...inspectorMode({
                    fieldId: 'shortDescription'
                  })}
                >
                  {shortDescription}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
      {body && (
        <div {...inspectorMode({ fieldId: 'body' })}>
          <CtfRichtext {...body} containerClassName={''} gridClassName={''} />
        </div>
      )}
    </div>
  )
}

export default CtfBusinessInfo
