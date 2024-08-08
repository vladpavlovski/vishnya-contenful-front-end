import React from 'react'

import { CtfCtaQueryVariables, getCtfCtaData } from './__generated/ctf-cta.generated'
import { CtfCta } from './CtfCta'

export const CtfCtaGql = async ({ id, locale, preview }: CtfCtaQueryVariables) => {
  const data = await getCtfCtaData({ id, locale, preview })

  return <CtfCta data={data} />
}
