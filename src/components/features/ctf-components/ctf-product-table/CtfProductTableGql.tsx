import { useContentfulLiveUpdates } from '@contentful/live-preview/react'

import { useCtfProductTableQuery } from './__generated/ctf-product-table.generated'
import { CtfProductTable } from './CtfProductTable'

import { EntryNotFound } from '@src/components/features/errors/EntryNotFound'

interface CtfProductTableGqlPropsInterface {
  id: string
  locale: string
  preview?: boolean
}

export const CtfProductTableGql = (props: CtfProductTableGqlPropsInterface) => {
  const { isLoading, data } = useCtfProductTableQuery({
    id: props.id,
    locale: props.locale,
    preview: props.preview
  })

  const componentProductTable = useContentfulLiveUpdates(data?.componentProductTable)

  if (isLoading || !componentProductTable) {
    return null
  }

  if (!componentProductTable) {
    return <EntryNotFound />
  }

  return <CtfProductTable {...componentProductTable} />
}
