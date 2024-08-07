import React from 'react'

import { CtfCtaQueryVariables, getCtfCtaOptions } from './__generated/ctf-cta.generated'
import { CtfCta } from './CtfCta'

import { getQueryClient } from '@src/lib/get-query-client'

export const CtfCtaGql = async ({ id, locale, preview }: CtfCtaQueryVariables) => {
  const queryClient = getQueryClient()
  const data = await queryClient.fetchQuery(getCtfCtaOptions({ id, locale, preview }))

  return <CtfCta data={data} />
}
