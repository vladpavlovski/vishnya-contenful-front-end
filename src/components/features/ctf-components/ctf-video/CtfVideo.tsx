'use client'

import { AssetFieldsFragment } from '@src/components/features/ctf-components/ctf-asset/__generated/ctf-asset.generated'

interface CtfVideoPropsInterface extends AssetFieldsFragment {
  showDescription?: boolean
  autoplay?: boolean
  className?: string
}

export const CtfVideo = (props: CtfVideoPropsInterface) => {
  const { description, url, showDescription, autoplay } = props

  return (
    <div>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video src={url!} autoPlay={autoplay} controls style={{ width: '100%' }} />
      {showDescription && <p>{description}</p>}
    </div>
  )
}
