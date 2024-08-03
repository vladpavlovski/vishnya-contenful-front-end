'use client'
import { useContentfulInspectorMode } from '@contentful/live-preview/react'
import React, { useMemo } from 'react'

import { BusinessInfoFieldsFragment } from './__generated/business-info.generated'

import { CtfRichtext } from '@src/components/features/ctf-components/ctf-richtext/ctf-richtext'

const CtfBusinessInfo = (props: BusinessInfoFieldsFragment) => {
  const {
    body,
    name,
    shortDescription,
    featuredImage,
    sys: { id }
  } = props
  const backgroundImage = useMemo(
    () => (featuredImage ? `${featuredImage.url}?w=1920` : undefined),
    [featuredImage]
  )

  const inspectorMode = useContentfulInspectorMode({ entryId: id })

  return (
    <div className={''}>
      {(name || shortDescription) && (
        <div className={''}>
          <div
            className={''}
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundColor: '#000',
              backgroundPosition: 'center center',
              backgroundSize: 'cover',
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              zIndex: 1
            }}
            {...inspectorMode({ fieldId: 'featuredImage' })}
          >
            <div
              className={''}
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                zIndex: 1
              }}
            />
          </div>
          <div className={''} style={{ maxWidth: '77rem', margin: '0 auto', textAlign: 'center' }}>
            <div
              className={''}
              style={{ maxWidth: '55rem', padding: '8rem 0', position: 'relative', color: '#fff' }}
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
