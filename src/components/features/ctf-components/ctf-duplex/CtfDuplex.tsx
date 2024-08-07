import { DuplexFieldsFragment } from './__generated/ctf-duplex.generated'

import { CtfImage } from '@src/components/features/ctf-components/ctf-image/CtfImage'
import { CtfRichtext } from '@src/components/features/ctf-components/ctf-richtext/CtfRichtext'
import { PageLink } from '@src/components/features/page-link/PageLink'
import { optimizeLineBreak } from '@src/utils'

const DuplexContent = (props: DuplexFieldsFragment) => {
  const { headline, bodyText, targetPage, ctaText } = props
  // const inspectorMode = useContentfulInspectorMode({ entryId: props.sys.id })

  return (
    <div className={''}>
      {headline && (
        <h2
          className={''}
          style={{
            fontSize: '3rem',
            lineHeight: 1.3,
            fontWeight: 700,
            maxWidth: '60.4rem'
          }}
          // {...inspectorMode({ fieldId: 'headline' })}
        >
          {optimizeLineBreak(headline)}
        </h2>
      )}
      {bodyText && (
        <div
          className={''}
          style={{
            fontWeight: 400,
            lineHeight: 1.56,
            marginTop: '7rem'
          }}
          // {...inspectorMode({ fieldId: 'bodyText' })}
        >
          <CtfRichtext {...bodyText} className={''} />
        </div>
      )}
      {targetPage && targetPage.slug && (
        <div
          className={''}
          style={{ marginTop: '8rem' }}
          // {...inspectorMode({ fieldId: 'ctaText' })}
        >
          <PageLink page={targetPage} variant="contained" isButton>
            {ctaText}
          </PageLink>
        </div>
      )}
    </div>
  )
}

const DuplexImage = (props: DuplexFieldsFragment) => {
  const { image } = props
  // const inspectorMode = useContentfulInspectorMode({ entryId: props.sys.id })

  return (
    <div className={''}>
      {image?.url ? (
        <div
          className={''}
          style={{ width: '100%', height: 'auto' }}
          // {...inspectorMode({ fieldId: 'image' })}
        >
          <CtfImage
            src={`${image.url}?w=600`}
            alt={image.description || ''}
            layout="responsive"
            width={image.width || undefined}
            height={image.height || undefined}
          />
        </div>
      ) : null}
    </div>
  )
}

export const CtfDuplex = (props: DuplexFieldsFragment) => {
  const { containerLayout: containerLayoutBoolean } = props

  return (
    <div className={''}>
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
  )
}
