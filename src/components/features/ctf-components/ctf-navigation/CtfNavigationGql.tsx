import {
  CtfNavigationQueryVariables,
  useCtfNavigationQuery
} from './__generated/ctf-navigation.generated'
import { CtfNavigation } from './CtfNavigation'

export const CtfNavigationGql = async (props: CtfNavigationQueryVariables) => {
  const data = await useCtfNavigationQuery.fetcher(props)()

  return <CtfNavigation {...data} />
}
