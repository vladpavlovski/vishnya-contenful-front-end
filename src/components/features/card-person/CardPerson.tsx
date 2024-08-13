import { Avatar } from '@src/components/features/avatar/Avatar'
import { PersonFieldsFragment } from '@src/components/features/ctf-components/ctf-person/__generated/ctf-person.generated'
import { CtfRichtext } from '@src/components/features/ctf-components/ctf-richtext/CtfRichtext'

export const CardPerson = ({ name, bio, avatar }: PersonFieldsFragment) => {
  return (
    <div style={{ display: 'flex' }}>
      {avatar && (
        <div>
          <Avatar asset={avatar} />
        </div>
      )}
      <div>
        {name && <p>{name}</p>}
        {bio && (
          <div>
            <CtfRichtext {...bio} />
          </div>
        )}
      </div>
    </div>
  )
}
