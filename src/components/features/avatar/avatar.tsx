import Image from 'next/legacy/image'

import { AssetFieldsFragment } from '@src/lib/__generated/graphql.types'

interface AvatarPropsInterface {
  asset: AssetFieldsFragment
  widthPx?: number
}

export const Avatar = (props: AvatarPropsInterface) => {
  const { asset, widthPx = 250 } = props
  const url = `${asset.url}?w=${widthPx}`

  return (
    <div>
      <Image src={url} alt="" />
    </div>
  )
}
