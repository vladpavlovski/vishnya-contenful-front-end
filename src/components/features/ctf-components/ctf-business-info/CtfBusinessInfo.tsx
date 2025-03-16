'use client'

import { CtfRichtext } from '@src/components/features/ctf-components/ctf-richtext/CtfRichtext'
import { EntryNotFound } from '@src/components/features/errors/EntryNotFound'
import { CtfBusinessInfoQuery } from '@src/lib/__generated/graphql.types'

const CtfBusinessInfo = ({ data }: { data: CtfBusinessInfoQuery }) => {
  const businessInfo = data?.topicBusinessInfo

  if (!businessInfo) {
    return <EntryNotFound />
  }

  const { body, name, shortDescription } = businessInfo

  return (
    <div>
      {(name || shortDescription) && (
        <div>
          <div style={{ maxWidth: '77rem', margin: '0 auto', textAlign: 'center' }}>
            <div
              style={{ maxWidth: '55rem', padding: '4rem 0', position: 'relative', color: '#fff' }}
            >
              {name && <h1 style={{ fontSize: '4.5rem' }}>{name}</h1>}
              {shortDescription && (
                <p style={{ fontSize: '2.5rem', marginTop: '3rem' }}>{shortDescription}</p>
              )}
            </div>
          </div>
        </div>
      )}
      {body && (
        <div>
          <CtfRichtext {...body} containerClassName={''} gridClassName={''} />
        </div>
      )}
    </div>
  )
}

export default CtfBusinessInfo
