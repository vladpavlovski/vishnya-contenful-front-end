import { CtfMobileMenu } from './CtfMobileMenu'

import {
  CtfNavigationQueryVariables,
  getCtfNavigationData
} from '@src/components/features/ctf-components/ctf-navigation/__generated/ctf-navigation.generated'

export const CtfMobileMenuGql = async (props: CtfNavigationQueryVariables) => {
  const data = await getCtfNavigationData(props)

  return <CtfMobileMenu {...data} />
}
