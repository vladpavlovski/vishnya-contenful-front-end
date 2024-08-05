'use client'
import { useContentfulLiveUpdates } from '@contentful/live-preview/react'

import { useCtfNavigationQuery } from './__generated/ctf-navigation.generated'
import { CtfNavigation } from './CtfNavigation'

import { useContentfulContext } from '@src/contentful-context'

export const CtfNavigationGql = () => {
  const { locale } = useContentfulContext()

  const { data, isLoading } = useCtfNavigationQuery({
    locale,
    preview: false
  })

  const navigationMenuCollection = useContentfulLiveUpdates(data?.navigationMenuCollection)

  if (!navigationMenuCollection || isLoading) return null

  return <CtfNavigation {...navigationMenuCollection} />
}
