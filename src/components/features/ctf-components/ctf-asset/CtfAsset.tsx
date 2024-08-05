'use client'
import { ImageProps } from 'next/legacy/image'

import { AssetFieldsFragment } from './__generated/ctf-asset.generated'

import { CtfImage } from '@src/components/features/ctf-components/ctf-image/CtfImage'
import { CtfVideo } from '@src/components/features/ctf-components/ctf-video/CtfVideo'

interface CtfAssetPropsInterface
  extends AssetFieldsFragment,
    Pick<ImageProps, 'layout' | 'objectFit' | 'objectPosition'> {
  className?: string
  showDescription?: boolean
  onClick?: () => any
}

export const CtfAsset = (props: CtfAssetPropsInterface) => {
  const { contentType, url, showDescription = true, title, width, height } = props

  if (!contentType || !url) {
    return null
  }

  if (contentType.startsWith('image')) {
    return (
      <CtfImage
        height={height || undefined}
        width={width || undefined}
        alt={title || ''}
        src={url}
        showDescription={showDescription}
      />
    )
  }

  if (contentType.startsWith('video')) {
    return <CtfVideo {...props} />
  }

  return null
}
