import { CtfMobileMenu } from './CtfMobileMenu'

import {
  CtfNavigationQueryVariables,
  useCtfNavigationQuery
} from '@src/components/features/ctf-components/ctf-navigation/__generated/ctf-navigation.generated'

export const CtfMobileMenuGql = async (props: CtfNavigationQueryVariables) => {
  const data = await useCtfNavigationQuery.fetcher(props)()

  return <CtfMobileMenu {...data} />
}
