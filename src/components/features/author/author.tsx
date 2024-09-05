import { Avatar } from '@src/components/features/avatar/Avatar'
import { PersonFieldsFragment } from '@src/lib/__generated/graphql.types'

// Function to render an author component with a name and optional avatar image
export const Author = (props: PersonFieldsFragment) => {
  const { name, avatar } = props

  return (
    <div>
      {/* Render the avatar if it exists */}
      {avatar && (
        <div style={{ display: 'inline-block', width: '11.4rem' }}>
          <Avatar asset={avatar} />
        </div>
      )}
      {/* Render the name if it exists */}
      {name && <p>{name}</p>}
    </div>
  )
}
