'use client'
import { TextBlockFieldsFragment } from './__generated/ctf-text-block.generated'

import { CtfRichtext } from '@src/components/features/ctf-components/ctf-richtext/ctf-richtext'
import { SectionHeadlines } from '@src/components/features/section-headlines/SectionHeadlines'

export const CtfTextBlock = ({ headline, subline, body }: TextBlockFieldsFragment) => {
  return (
    <div>
      <div
        className={''}
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
          className={''}
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
