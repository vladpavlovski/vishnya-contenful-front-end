'use client'
import React from 'react'

import { CtaFieldsFragment } from './__generated/ctf-cta.generated'

import { CtfRichtext } from '@src/components/features/ctf-components/ctf-richtext/CtfRichtext'
import { PageLink } from '@src/components/features/page-link/PageLink'
import { optimizeLineBreak } from '@src/utils'

export const CtfCta = (props: CtaFieldsFragment) => {
  const { headline, subline, targetPage, ctaText, urlParameters } = props

  return (
    <div
      className={''}
      style={{
        textAlign: 'center'
      }}
    >
      <div
        className={''}
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '93.4rem',
          padding: '19rem 0'
        }}
      >
        {headline && (
          <h2
            className={''}
            style={{
              fontWeight: 'bold'
            }}
          >
            {optimizeLineBreak(headline)}
          </h2>
        )}
        {subline && (
          <div
            className={''}
            style={{
              fontWeight: 400,
              lineHeight: 1.52,
              marginTop: '8rem'
            }}
          >
            <CtfRichtext {...subline} className={''} />
          </div>
        )}
        {targetPage && targetPage.slug && (
          <div className={''} style={{ marginTop: '8rem' }}>
            <PageLink
              page={targetPage}
              variant="contained"
              isButton
              urlParams={urlParameters ?? ''}
            >
              {ctaText}
            </PageLink>
          </div>
        )}
      </div>
    </div>
  )
}
