'use client'
import { useContentfulInspectorMode } from '@contentful/live-preview/react'

import { CtfHeroBannerQuery } from './__generated/ctf-hero-banner.generated'

import { CtfRichtext } from '@src/components/features/ctf-components/ctf-richtext/CtfRichtext'
import { PageLink } from '@src/components/features/page-link/PageLink'

export const CtfHeroBanner = ({ componentHeroBanner }: CtfHeroBannerQuery) => {
  const {
    image,
    imageStyle: imageStyleBoolean,
    headline,
    bodyText,
    ctaText,
    targetPage,
    sys: { id }
  } = componentHeroBanner!

  const imageStyle = imageStyleBoolean ? 'partial' : 'full'
  const backgroundImage = image ? `${image.url}?w=${767 * 2}` : undefined
  const inspectorMode = useContentfulInspectorMode({ entryId: id })

  return (
    <div {...inspectorMode({ fieldId: 'image' })}>
      {imageStyle === 'partial' && backgroundImage && (
        <div>
          <div
            style={{
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100%',
              position: 'absolute',
              right: 0,
              top: 0,
              width: '50%',
              backgroundImage: `url(${backgroundImage})`
            }}
          />
        </div>
      )}
      <div>
        {headline && (
          <h1
            style={{
              fontSize: '3rem',
              fontWeight: 800,
              lineHeight: 1.08,
              maxWidth: '44rem'
            }}
            {...inspectorMode({ fieldId: 'headline' })}
          >
            {headline}
          </h1>
        )}
        {bodyText && (
          <div
            style={{
              fontWeight: 400,
              lineHeight: 1.56,
              marginTop: '6rem'
            }}
            {...inspectorMode({ fieldId: 'bodyText' })}
          >
            <CtfRichtext {...bodyText} />
          </div>
        )}
        {targetPage && ctaText && (
          <div style={{ marginTop: '6rem' }}>
            <PageLink page={targetPage} variant="contained" isButton>
              {ctaText}
            </PageLink>
          </div>
        )}
      </div>
    </div>
  )
}
