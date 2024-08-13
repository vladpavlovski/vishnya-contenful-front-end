'use client'
import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates
} from '@contentful/live-preview/react'

import { CtfRichtext } from '@src/components/features/ctf-components/ctf-richtext/CtfRichtext'
import { EntryNotFound } from '@src/components/features/errors/EntryNotFound'
import {
  BusinessInfoFieldsFragment,
  CtfBusinessInfoQuery
} from '@src/lib/__generated/graphql.types'

const CtfBusinessInfo = ({ data }: { data: CtfBusinessInfoQuery }) => {
  const topicBusinessInfo = useContentfulLiveUpdates(
    data.topicBusinessInfo
  ) as BusinessInfoFieldsFragment

  const { body, name, shortDescription, sys } = topicBusinessInfo

  const inspectorMode = useContentfulInspectorMode({ entryId: sys.id })

  if (!topicBusinessInfo) {
    return <EntryNotFound />
  }

  return (
    <div>
      {(name || shortDescription) && (
        <div>
          <div {...inspectorMode({ fieldId: 'featuredImage' })} />
          <div style={{ maxWidth: '77rem', margin: '0 auto', textAlign: 'center' }}>
            <div
              style={{ maxWidth: '55rem', padding: '4rem 0', position: 'relative', color: '#fff' }}
            >
              {name && (
                <h1 style={{ fontSize: '4.5rem' }} {...inspectorMode({ fieldId: 'name' })}>
                  {name}
                </h1>
              )}
              {shortDescription && (
                <p
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
