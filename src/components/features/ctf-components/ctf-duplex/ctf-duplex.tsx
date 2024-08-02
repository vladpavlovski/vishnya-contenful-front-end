import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import clsx from 'clsx';

import { DuplexFieldsFragment } from './__generated/ctf-duplex.generated';

import { CtfImage } from '@src/components/features/ctf-components/ctf-image/ctf-image';
import { CtfRichtext } from '@src/components/features/ctf-components/ctf-richtext/ctf-richtext';
import { PageLink } from '@src/components/features/page-link';
import LayoutContext, { defaultLayout } from '@src/layout-context';
import { getColorConfigFromPalette } from '@src/theme';
import { optimizeLineBreak } from '@src/utils';

const DuplexContent = (props: DuplexFieldsFragment) => {
  const { headline, bodyText, targetPage, ctaText, colorPalette } = props;
  const colorConfig = getColorConfigFromPalette(colorPalette || '');
  const inspectorMode = useContentfulInspectorMode({ entryId: props.sys.id });

  return (
    <div className={''}>
      {headline && (
        <h2
          className={''}
          style={{
            fontSize: '3rem',
            lineHeight: 1.3,
            fontWeight: 700,
            maxWidth: '60.4rem',
            color: colorConfig.headlineColor,
          }}
          {...inspectorMode({ fieldId: 'headline' })}
        >
          {optimizeLineBreak(headline)}
        </h2>
      )}
      {bodyText && (
        <LayoutContext.Provider value={{ ...defaultLayout, parent: 'duplex' }}>
          <div
            className={''}
            style={{
              color: colorConfig.textColor,
              fontWeight: 400,
              lineHeight: 1.56,
              marginTop: '7rem',
            }}
            {...inspectorMode({ fieldId: 'bodyText' })}
          >
            <CtfRichtext {...bodyText} className={''} />
          </div>
        </LayoutContext.Provider>
      )}
      {targetPage && targetPage.slug && (
        <div
          className={''}
          style={{ marginTop: '8rem' }}
          {...inspectorMode({ fieldId: 'ctaText' })}
        >
          <PageLink page={targetPage} variant="contained" color={colorConfig.buttonColor} isButton>
            {ctaText}
          </PageLink>
        </div>
      )}
    </div>
  );
};

const DuplexImage = (props: DuplexFieldsFragment) => {
  const { image, imageStyle: imageStyleBoolean } = props;
  const imageStyle = imageStyleBoolean ? 'fixed' : 'full';
  const inspectorMode = useContentfulInspectorMode({ entryId: props.sys.id });

  return (
    <div className={''}>
      {image?.url ? (
        <div
          className={''}
          style={{ width: '100%', height: 'auto' }}
          {...inspectorMode({ fieldId: 'image' })}
        >
          <CtfImage
            className={clsx([
              imageStyle === 'fixed'
                ? {
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center center',
                  }
                : '',
            ])}
            src={`${image.url}?w=600`}
            alt={image.description || ''}
            layout="responsive"
            width={image.width || undefined}
            height={image.height || undefined}
          />
        </div>
      ) : null}
    </div>
  );
};

export const CtfDuplex = (props: DuplexFieldsFragment) => {
  const { colorPalette, containerLayout: containerLayoutBoolean } = props;
  const colorConfig = getColorConfigFromPalette(colorPalette || '');

  return (
    <div className={''} style={{ backgroundColor: colorConfig.backgroundColor }}>
      <div className={''}>
        {containerLayoutBoolean ? (
          <>
            <DuplexImage {...props} />
            <DuplexContent {...props} />
          </>
        ) : (
          <>
            <DuplexContent {...props} />
            <DuplexImage {...props} />
          </>
        )}
      </div>
    </div>
  );
};
