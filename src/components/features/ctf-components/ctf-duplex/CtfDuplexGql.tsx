import React from 'react'

import { CtfDuplexQueryVariables, getCtfDuplexOptions } from './__generated/ctf-duplex.generated'
import { CtfDuplex } from './CtfDuplex'

import { getQueryClient } from '@src/lib/get-query-client'

export const CtfDuplexGql = async (variables: CtfDuplexQueryVariables) => {
  const queryClient = getQueryClient()
  const { componentDuplex } = await queryClient.fetchQuery(getCtfDuplexOptions(variables))

  if (!componentDuplex) return null
  return <CtfDuplex {...componentDuplex} />
}
