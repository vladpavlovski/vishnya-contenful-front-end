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
    <div className={''} style={{ width: '100%', height: 0, padding: '50%', position: 'relative' }}>
      <Image
        className={''}
        src={url}
        style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
        alt=""
      />
    </div>
  )
}
