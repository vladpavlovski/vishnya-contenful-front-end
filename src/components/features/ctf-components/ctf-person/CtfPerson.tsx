import { CtfPersonQuery } from './__generated/ctf-person.generated'

import { CardLeadership } from '@src/components/features/card-leadership/CardLeadership'
import { CardPerson } from '@src/components/features/card-person/CardPerson'

interface CtfPersonPropsInterface extends CtfPersonQuery {
  previousComponent: string | null
}

export const CtfPerson = (props: CtfPersonPropsInterface) => {
  const isLeadership = !!props?.topicPerson?.cardStyle
  const { ...rest } = props.topicPerson
  const cardProps = { ...rest, previousComponent: props.previousComponent }

  return (
    <div style={{ maxWidth: '100%', padding: 0 }}>
      <div>{isLeadership ? <CardLeadership {...cardProps} /> : <CardPerson {...cardProps} />}</div>
    </div>
  )
}
