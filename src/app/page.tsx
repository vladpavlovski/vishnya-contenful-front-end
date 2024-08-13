import { HydrationBoundary, dehydrate } from '@tanstack/react-query'
import React from 'react'

import { getQueryClient } from '../lib/get-query-client'

import { useCtfFooterQuery } from '@src/components/features/ctf-components/ctf-footer/__generated/ctf-footer.generated'
import { useCtfNavigationQuery } from '@src/components/features/ctf-components/ctf-navigation/__generated/ctf-navigation.generated'
import { useCtfPageQuery } from '@src/components/features/ctf-components/ctf-page/__generated/ctf-page.generated'
import CtfPageGgl from '@src/components/features/ctf-components/ctf-page/CtfPageGgl'
import { prefetchPromiseArr } from '@src/lib/prefetch-promise-array'

export default async function Page() {
  const queryClient = getQueryClient()

  const locale = 'en-US'
  const preview = false

  // Default queries
  const prefetchPromises = [
    queryClient.prefetchQuery({
      queryKey: useCtfPageQuery.getKey({ slug: 'home', locale, preview }),
      queryFn: useCtfPageQuery.fetcher({ slug: 'home', locale, preview })
    }),
    queryClient.prefetchQuery({
      queryKey: useCtfNavigationQuery.getKey({ locale, preview }),
      queryFn: useCtfNavigationQuery.fetcher({ locale, preview })
    }),
    queryClient.prefetchQuery({
      queryKey: useCtfFooterQuery.getKey({ locale, preview }),
      queryFn: useCtfFooterQuery.fetcher({ locale, preview })
    })
  ]

  // Dynamic queries
  const pageData = await useCtfPageQuery.fetcher({ slug: 'home', locale, preview })()
  const page = pageData.pageCollection?.items[0]

  const topSection = page?.topSectionCollection?.items
  const content = page?.pageContent
  const extraSection = page?.extraSectionCollection?.items

  await Promise.all([
    ...prefetchPromises,
    ...prefetchPromiseArr({ inputArr: topSection, locale, queryClient }),
    ...prefetchPromiseArr({ inputArr: extraSection, locale, queryClient }),
    ...prefetchPromiseArr({ inputArr: [content], locale, queryClient })
  ])

  return (
    <main>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <CtfPageGgl slug="/" />
      </HydrationBoundary>
    </main>
  )
}
