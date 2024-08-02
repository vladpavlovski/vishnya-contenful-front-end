import { TextBlockFieldsFragment } from './__generated/ctf-text-block.generated';

import { CtfRichtext } from '@src/components/features/ctf-components/ctf-richtext/ctf-richtext';
import { SectionHeadlines } from '@src/components/features/section-headlines';
import { getColorConfigFromPalette } from '@src/theme';

export const CtfTextBlock = ({
  headline,
  subline,
  body,
  colorPalette,
}: TextBlockFieldsFragment) => {
  const colorConfig = getColorConfigFromPalette(colorPalette || '');

  return (
    <div
      style={{
        backgroundColor: colorConfig.backgroundColor,
      }}
    >
      <div
        className={''}
        style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: '126rem', padding: '152px 0' }}
      >
        <SectionHeadlines
          headline={headline}
          headlineProps={{
            style: { color: colorConfig.headlineColor },
          }}
          subline={subline}
          sublineProps={{
            style: { color: colorConfig.textColor },
          }}
          className={''}
        />
        {body && (
          <div
            style={{
              color: colorConfig.textColor,
            }}
          >
            <CtfRichtext {...body} />
          </div>
        )}
      </div>
    </div>
  );
};
