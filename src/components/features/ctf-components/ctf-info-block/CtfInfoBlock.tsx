'use client'

import { InfoBlockFieldsFragment } from './__generated/ctf-info-block.generated'

import { CtfAsset } from '@src/components/features/ctf-components/ctf-asset/CtfAsset'
import { CtfRichtext } from '@src/components/features/ctf-components/ctf-richtext/CtfRichtext'
import { SectionHeadlines } from '@src/components/features/section-headlines/SectionHeadlines'

export interface CtfInfoBlockPropsInterface extends InfoBlockFieldsFragment {
  previousComponent?: string | null
}

export const CtfInfoBlock = (props: CtfInfoBlockPropsInterface) => {
  const {
    headline,
    subline,
    block1Image,
    block1Body,
    block2Image,
    block2Body,
    block3Image,
    block3Body,
    previousComponent
  } = props

  return (
    <div
      style={{
        maxWidth: '100%',
        margin: '0 auto'
      }}
    >
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '126rem',
          padding: '19rem 0',
          marginTop:
            previousComponent === 'ComponentInfoBlock' && !headline && !subline ? '-19rem' : '0',
          paddingTop:
            previousComponent === 'ComponentInfoBlock' && !headline && !subline ? '0' : '19rem'
        }}
      >
        <SectionHeadlines
          headline={headline}
          headlineProps={{
            style: {}
          }}
          subline={subline}
          sublineProps={{
            style: {}
          }}
        />

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            justifyContent: 'center',
            marginLeft: '-5rem',
            marginTop: '-5rem'
          }}
        >
          {block1Body && (
            <div
              style={{
                marginLeft: '5rem',
                marginTop: '5rem',
                maxWidth: '39rem',
                width: '100%'
              }}
            >
              {block1Image && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '11.3rem',
                    height: '11.3rem',
                    fontSize: 0
                  }}
                >
                  <CtfAsset {...block1Image} showDescription={false} />
                </div>
              )}
              <div>
                <CtfRichtext {...block1Body} />
              </div>
            </div>
          )}
          {block2Body && (
            <div
              style={{
                marginLeft: '5rem',
                marginTop: '5rem',
                maxWidth: '39rem',
                width: '100%'
              }}
            >
              {block2Image && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '11.3rem',
                    height: '11.3rem',
                    fontSize: 0
                  }}
                >
                  <CtfAsset {...block2Image} showDescription={false} />
                </div>
              )}
              <div>
                <CtfRichtext {...block2Body} />
              </div>
            </div>
          )}
          {block3Body && (
            <div
              style={{
                marginLeft: '5rem',
                marginTop: '5rem',
                maxWidth: '39rem',
                width: '100%'
              }}
            >
              {block3Image && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '11.3rem',
                    height: '11.3rem',
                    fontSize: 0
                  }}
                >
                  <CtfAsset {...block3Image} showDescription={false} />
                </div>
              )}
              <div>
                <CtfRichtext {...block3Body} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
