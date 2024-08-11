import { CtfPerson } from './CtfPerson'

import {
  CtfPersonQueryVariables,
  useCtfPersonQuery
} from '@src/components/features/ctf-components/ctf-person/__generated/ctf-person.generated'

export const CtfPersonGql = async (
  props: CtfPersonQueryVariables & { previousComponent: string | null }
) => {
  const { id, locale, preview, previousComponent } = props

  const data = await useCtfPersonQuery.fetcher({
    id,
    locale,
    preview
  })()

  return <CtfPerson {...data} previousComponent={previousComponent} />
}
