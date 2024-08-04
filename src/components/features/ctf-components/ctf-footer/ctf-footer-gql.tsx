'use client'
import { useContentfulLiveUpdates } from '@contentful/live-preview/react'
import { queryOptions } from '@tanstack/react-query'
import React from 'react'

import { useCtfFooterQuery } from './__generated/ctf-footer.generated'
import { CtfFooter } from './ctf-footer'

import { getQueryClient } from '@src/app/get-query-client'
import { useContentfulContext } from '@src/contentful-context'

export const footerOptions = queryOptions({
  queryKey: useCtfFooterQuery.getKey(),
  queryFn: useCtfFooterQuery.fetcher()
})

export const CtfFooterGql = () => {
  // const { locale } = useContentfulContext()
  const queryClient = getQueryClient()
  void queryClient.prefetchQuery(footerOptions)
  // const { data, isLoading } = useCtfFooterQuery({
  //   locale,
  //   preview: false
  // })

  // const footerMenuCollection = data?.footerMenuCollection

  // if (!footerMenuCollection || isLoading) return null

  return <CtfFooter />
}
