import { queryOptions } from '@tanstack/react-query'
import React from 'react'

import { useCtfFooterQuery } from './__generated/ctf-footer.generated'
import { CtfFooter } from './ctf-footer'

import { getQueryClient } from '@src/lib/get-query-client'

export const footerOptions = queryOptions({
  queryKey: useCtfFooterQuery.getKey(),
  queryFn: useCtfFooterQuery.fetcher()
})

export const CtfFooterGql = () => {
  const queryClient = getQueryClient()
  void queryClient.prefetchQuery(footerOptions)

  return <CtfFooter />
}
