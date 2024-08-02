import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import { useMemo } from 'react';

import { HeroBannerFieldsFragment } from './__generated/ctf-hero-banner.generated';

import { CtfRichtext } from '@src/components/features/ctf-components/ctf-richtext/ctf-richtext';
import { PageLink } from '@src/components/features/page-link';
import LayoutContext, { defaultLayout, useLayoutContext } from '@src/layout-context';

export const CtfHeroBanner = (props: HeroBannerFieldsFragment) => {
  const {
    image,
    imageStyle: imageStyleBoolean,
    headline,
    bodyText,
    ctaText,
    targetPage,
    sys: { id },
  } = props;
  const layout = useLayoutContext();

  const imageStyle = imageStyleBoolean ? 'partial' : 'full';
  const backgroundImage = useMemo(
    () =>
      image
        ? `${image.url}?w=${imageStyle === 'partial' ? 767 * 2 : layout.containerWidth * 2}`
        : undefined,
    [image, imageStyle, layout.containerWidth],
  );
  const inspectorMode = useContentfulInspectorMode({ entryId: id });

  return (
    <div className={''} {...inspectorMode({ fieldId: 'image' })}>
      {imageStyle === 'partial' && backgroundImage && (
        <div className={''}>
          <div
            className={''}
            style={{
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100%',
              position: 'absolute',
              right: 0,
              top: 0,
              width: '50%',
              backgroundImage: `url(${backgroundImage})`,
            }}
          />
        </div>
      )}
      <div className={''}>
        {headline && (
          <h1
            className={''}
            style={{
              fontSize: '3rem',
              fontWeight: 800,
              lineHeight: 1.08,
              maxWidth: '44rem',
            }}
            {...inspectorMode({ fieldId: 'headline' })}
          >
            {headline}
          </h1>
        )}
        {bodyText && (
          <LayoutContext.Provider value={{ ...defaultLayout, parent: 'hero-banner-body' }}>
            <div
              className={''}
              style={{
                fontWeight: 400,
                lineHeight: 1.56,
                marginTop: '6rem',
              }}
              {...inspectorMode({ fieldId: 'bodyText' })}
            >
              <CtfRichtext {...bodyText} className={''} />
            </div>
          </LayoutContext.Provider>
        )}
        {targetPage && ctaText && (
          <div className={''} style={{ marginTop: '6rem' }}>
            <PageLink page={targetPage} variant="contained" isButton>
              {ctaText}
            </PageLink>
          </div>
        )}
      </div>
    </div>
  );
};
