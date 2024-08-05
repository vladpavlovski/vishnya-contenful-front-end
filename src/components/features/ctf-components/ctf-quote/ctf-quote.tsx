'use client'
import { useContentfulInspectorMode } from '@contentful/live-preview/react'
import { useMemo } from 'react'

import { QuoteFieldsFragment } from './__generated/ctf-quote.generated'

import { CtfRichtext } from '@src/components/features/ctf-components/ctf-richtext/ctf-richtext'

export const CtfQuote = (props: QuoteFieldsFragment) => {
  const {
    imagePosition,
    image,
    quote,

    quoteAlignment: quoteAlignmentBoolean,
    sys: { id }
  } = props
  const containerLayout = imagePosition === true ? 'imageLeft' : 'imageRight'
  const quoteAlignment = quoteAlignmentBoolean === true ? 'center' : 'left'
  const backgroundImage = useMemo(() => (image ? `${image.url}?w=${600 * 2}` : undefined), [image])
  const inspectorMode = useContentfulInspectorMode({ entryId: id })

  return (
    <div>
      <div
        style={{
          order: 2,
          width: '100%',
          flexShrink: 0,
          flexDirection: containerLayout === 'imageLeft' ? 'row' : 'row-reverse'
        }}
      >
        {quote && (
          <div
            {...inspectorMode({ fieldId: 'quote' })}
            style={{
              textAlign: quoteAlignment
            }}
          >
            <CtfRichtext {...quote} />
          </div>
        )}
      </div>
      <div
        style={{
          maxWidth: '60rem',
          order: 1,
          width: '100%'
        }}
        {...inspectorMode({
          fieldId: 'image'
        })}
      >
        {backgroundImage && (
          <div
            style={{
              backgroundImage: `url('${backgroundImage}')`
            }}
          />
        )}
      </div>
    </div>
  )
}
