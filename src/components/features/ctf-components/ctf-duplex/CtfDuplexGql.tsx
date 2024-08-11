import React from 'react'

import { CtfDuplexQueryVariables, useCtfDuplexQuery } from './__generated/ctf-duplex.generated'
import { CtfDuplex } from './CtfDuplex'

export const CtfDuplexGql = async (variables: CtfDuplexQueryVariables) => {
  const { componentDuplex } = await useCtfDuplexQuery.fetcher(variables)()

  if (!componentDuplex) return null
  return <CtfDuplex {...componentDuplex} />
}
