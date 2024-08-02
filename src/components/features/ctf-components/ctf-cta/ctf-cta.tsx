import React from 'react';

import { CtaFieldsFragment } from './__generated/ctf-cta.generated';

import { CtfRichtext } from '@src/components/features/ctf-components/ctf-richtext/ctf-richtext';
import { PageLink } from '@src/components/features/page-link';
import LayoutContext, { defaultLayout } from '@src/layout-context';
import { getColorConfigFromPalette } from '@src/theme';
import { optimizeLineBreak } from '@src/utils';

export const CtfCta = (props: CtaFieldsFragment) => {
  const { headline, subline, targetPage, ctaText, colorPalette, urlParameters } = props;
  const colorConfig = getColorConfigFromPalette(colorPalette || '');

  return (
    <div
      className={''}
      style={{
        backgroundColor: colorConfig.backgroundColor,
        textAlign: 'center',
      }}
    >
      <div
        className={''}
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '93.4rem',
          padding: '19rem 0',
        }}
      >
        {headline && (
          <h2
            className={''}
            style={{
              fontWeight: 'bold',
              color: colorConfig.headlineColor,
            }}
          >
            {optimizeLineBreak(headline)}
          </h2>
        )}
        {subline && (
          <LayoutContext.Provider value={{ ...defaultLayout, parent: 'cta-subline' }}>
            <div
              className={''}
              style={{
                color: colorConfig.textColor,
                fontWeight: 400,
                lineHeight: 1.52,
                marginTop: '8rem',
              }}
            >
              <CtfRichtext {...subline} className={''} />
            </div>
          </LayoutContext.Provider>
        )}
        {targetPage && targetPage.slug && (
          <div className={''} style={{ marginTop: '8rem' }}>
            <PageLink
              page={targetPage}
              variant="contained"
              color={colorConfig.buttonColor}
              isButton
              urlParams={urlParameters ?? ''}
            >
              {ctaText}
            </PageLink>
          </div>
        )}
      </div>
    </div>
  );
};
