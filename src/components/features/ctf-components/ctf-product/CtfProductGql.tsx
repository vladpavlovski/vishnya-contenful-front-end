import { CtfProductQueryVariables, useCtfProductQuery } from './__generated/ctf-product.generated'
import { CtfProduct } from './CtfProduct'

import { EntryNotFound } from '@src/components/features/errors/EntryNotFound'

export const CtfProductGql = async (props: CtfProductQueryVariables) => {
  const data = await useCtfProductQuery.fetcher(props)()

  if (!data) {
    return <EntryNotFound />
  }

  return <CtfProduct {...data} />
}
