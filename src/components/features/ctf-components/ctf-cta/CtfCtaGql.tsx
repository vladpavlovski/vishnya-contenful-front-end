import { queryOptions } from '@tanstack/react-query'
import React from 'react'

import { CtfCtaQueryVariables, useCtfCtaQuery } from './__generated/ctf-cta.generated'
import { CtfCta } from './CtfCta'

import { getQueryClient } from '@src/lib/get-query-client'

interface CtfCtaGqlPropsInterface {
  id: string
  locale: string
  preview: boolean
}

export const getCtfCtaOptions = ({ id }: CtfCtaQueryVariables) =>
  queryOptions({
    queryKey: useCtfCtaQuery.getKey({
      id
    }),
    queryFn: useCtfCtaQuery.fetcher({ id })
  })

export const CtfCtaGql = ({ id, locale, preview }: CtfCtaGqlPropsInterface) => {
  const queryClient = getQueryClient()
  void queryClient.prefetchQuery(getCtfCtaOptions({ id, locale, preview }))

  return <CtfCta id={id} />
}
