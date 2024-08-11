import React from 'react'

import { CtfFooterQueryVariables, useCtfFooterQuery } from './__generated/ctf-footer.generated'
import { CtfFooter } from './CtfFooter'

export const CtfFooterGql = async (variables: CtfFooterQueryVariables) => {
  const data = await useCtfFooterQuery.fetcher(variables)()
  return <CtfFooter {...data} />
}
