'use client'
import { useContentfulInspectorMode } from '@contentful/live-preview/react'
import { Fragment } from 'react'

import { CtfProductQuery } from './__generated/ctf-product.generated'

import { CtfAsset } from '@src/components/features/ctf-components/ctf-asset/CtfAsset'
import { CtfRichtext } from '@src/components/features/ctf-components/ctf-richtext/CtfRichtext'

export const CtfProduct = ({ topicProduct }: CtfProductQuery) => {
  const {
    name,
    featuredImage,
    description,
    featuresCollection,
    sys: { id }
  } = topicProduct!

  const inspectorMode = useContentfulInspectorMode()

  return (
    <>
      <div style={{ maxWidth: '100%', padding: 0 }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: '126rem',
            paddingTop: '152px', // Assuming theme.spacing(19) is 76px
            paddingBottom: '152px', // Assuming theme.spacing(19) is 76px
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div
            style={{
              order: 2,
              width: '100%'
            }}
          >
            {name && (
              <h2
                style={{
                  fontSize: '3.2rem',
                  maxWidth: '60.4rem',
                  fontWeight: 600,
                  lineHeight: 1.39
                }}
                {...inspectorMode({ entryId: id, fieldId: 'name' })}
              >
                {name}
              </h2>
            )}
            {description && (
              <div
                {...inspectorMode({
                  entryId: id,
                  fieldId: 'description'
                })}
              >
                <CtfRichtext {...description} />
              </div>
            )}
          </div>
          {featuredImage && (
            <div
              style={{
                marginBottom: '80px', // Assuming theme.spacing(10) is 80px
                order: 1,
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-end'
              }}
              {...inspectorMode({
                entryId: id,
                fieldId: 'featuredImage'
              })}
            >
              <CtfAsset {...featuredImage} showDescription={false} />
            </div>
          )}
        </div>
      </div>
      {featuresCollection && featuresCollection.items.length > 0 && (
        <section
          style={{
            backgroundColor: '#FCFCFC',
            paddingTop: '152px', // Assuming theme.spacing(19) is 76px
            paddingBottom: '48px' // Assuming theme.spacing(12) is 48px
          }}
        >
          <div
            style={{
              maxWidth: '77rem',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            <div
              style={{
                display: 'flex'
              }}
            >
              <dl>
                {featuresCollection.items.map(
                  item =>
                    item && (
                      <Fragment key={item.sys.id}>
                        <div
                          style={{
                            backgroundColor: '#707070',
                            height: '2px',
                            display: item === featuresCollection.items[0] ? 'none' : 'block'
                          }}
                        />
                        <div
                          style={{
                            display: 'flex',
                            marginTop: '80px' // Assuming theme.spacing(10) is 80px
                          }}
                        >
                          <dt
                            style={{
                              marginBottom: '32px', // Assuming theme.spacing(4) is 32px
                              color: '#414D63'
                            }}
                            {...inspectorMode({
                              entryId: item.sys.id,
                              fieldId: 'name'
                            })}
                          >
                            {item.name}
                          </dt>
                          <dd
                            style={{
                              width: '50rem',
                              fontSize: '1.8rem',
                              color: '#414D63',
                              margin: 0
                            }}
                          >
                            {item.longDescription && (
                              <div
                                {...inspectorMode({
                                  entryId: item.sys.id,
                                  fieldId: 'longDescription'
                                })}
                              >
                                <CtfRichtext {...item.longDescription} />
                              </div>
                            )}
                          </dd>
                        </div>
                      </Fragment>
                    )
                )}
              </dl>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
