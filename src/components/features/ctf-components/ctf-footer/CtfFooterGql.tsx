import React from 'react'

import { CtfFooterQueryVariables, getCtfFooterData } from './__generated/ctf-footer.generated'
import { CtfFooter } from './CtfFooter'

export const CtfFooterGql = async (variables: CtfFooterQueryVariables) => {
  const data = await getCtfFooterData(variables)

  return <CtfFooter {...data} />
}
