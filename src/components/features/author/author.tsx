import { Avatar } from '@src/components/features/avatar/Avatar'
import { PersonFieldsFragment } from '@src/lib/__generated/graphql.types'

export const Author = (props: PersonFieldsFragment) => {
  const { name, avatar } = props

  return (
    <div>
      {avatar && (
        <div style={{ display: 'inline-block', width: '11.4rem' }}>
          <Avatar asset={avatar} />
        </div>
      )}
      {name && <p>{name}</p>}
    </div>
  )
}
