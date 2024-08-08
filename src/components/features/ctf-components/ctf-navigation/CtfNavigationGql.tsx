import {
  CtfNavigationQueryVariables,
  getCtfNavigationData
} from './__generated/ctf-navigation.generated'
import { CtfNavigation } from './CtfNavigation'

export const CtfNavigationGql = async (props: CtfNavigationQueryVariables) => {
  const data = await getCtfNavigationData(props)

  return <CtfNavigation {...data} />
}
