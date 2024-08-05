'use client'
import { useContentfulLiveUpdates } from '@contentful/live-preview/react'

import { useCtfProductQuery } from './__generated/ctf-product.generated'
import { CtfProduct } from './ctf-product'

import { EntryNotFound } from '@src/components/features/errors/EntryNotFound'

interface CtfProductGqlPropsInterface {
  id: string
  locale: string
  preview?: boolean
}

export const CtfProductGql = (props: CtfProductGqlPropsInterface) => {
  const { isLoading, data } = useCtfProductQuery({
    id: props.id,
    locale: props.locale,
    preview: props.preview
  })

  const topicProduct = useContentfulLiveUpdates(data?.topicProduct)

  if (!data || isLoading) {
    return null
  }

  if (!topicProduct) {
    return <EntryNotFound />
  }

  return <CtfProduct {...topicProduct} />
}
