import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import { useMemo } from 'react';

import { QuoteFieldsFragment } from './__generated/ctf-quote.generated';

import { CtfRichtext } from '@src/components/features/ctf-components/ctf-richtext/ctf-richtext';
import LayoutContext, { defaultLayout } from '@src/layout-context';
import { getColorConfigFromPalette } from '@src/theme';

export const CtfQuote = (props: QuoteFieldsFragment) => {
  const {
    imagePosition,
    image,
    quote,
    colorPalette,
    quoteAlignment: quoteAlignmentBoolean,
    sys: { id },
  } = props;
  const colorConfig = getColorConfigFromPalette(colorPalette || '');
  const containerLayout = imagePosition === true ? 'imageLeft' : 'imageRight';
  const quoteAlignment = quoteAlignmentBoolean === true ? 'center' : 'left';
  const backgroundImage = useMemo(() => (image ? `${image.url}?w=${600 * 2}` : undefined), [image]);
  const inspectorMode = useContentfulInspectorMode({ entryId: id });

  return (
    <LayoutContext.Provider value={{ ...defaultLayout, parent: 'quote' }}>
      <div
        style={{
          backgroundColor: colorConfig.backgroundColor,
        }}
      >
        <div
          style={{
            order: 2,
            width: '100%',
            flexShrink: 0,
            flexDirection: containerLayout === 'imageLeft' ? 'row' : 'row-reverse',
          }}
        >
          {quote && (
            <div
              {...inspectorMode({ fieldId: 'quote' })}
              style={{
                color: colorConfig.textColor,
                textAlign: quoteAlignment,
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
            width: '100%',
          }}
          {...inspectorMode({
            fieldId: 'image',
          })}
        >
          {backgroundImage && (
            <div
              style={{
                backgroundImage: `url('${backgroundImage}')`,
              }}
            />
          )}
        </div>
      </div>
    </LayoutContext.Provider>
  );
};
