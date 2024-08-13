'use client'
import { CtfTextBlockQuery } from './__generated/ctf-text-block.generated'

import { CtfRichtext } from '@src/components/features/ctf-components/ctf-richtext/CtfRichtext'
import { SectionHeadlines } from '@src/components/features/section-headlines/SectionHeadlines'

export const CtfTextBlock = ({ componentTextBlock }: CtfTextBlockQuery) => {
  const { headline, subline, body } = componentTextBlock!
  return (
    <div>
      <div
        style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: '126rem', padding: '152px 0' }}
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
        {body && (
          <div>
            <CtfRichtext {...body} />
          </div>
        )}
      </div>
    </div>
  )
}
