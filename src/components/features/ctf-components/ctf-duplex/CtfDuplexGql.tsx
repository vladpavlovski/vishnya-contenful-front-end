import React from 'react'

import { CtfDuplexQueryVariables, getCtfDuplexData } from './__generated/ctf-duplex.generated'
import { CtfDuplex } from './CtfDuplex'

export const CtfDuplexGql = async (variables: CtfDuplexQueryVariables) => {
  const { componentDuplex } = await getCtfDuplexData(variables)

  if (!componentDuplex) return null
  return <CtfDuplex {...componentDuplex} />
}
