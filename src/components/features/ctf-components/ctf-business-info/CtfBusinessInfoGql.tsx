import { queryOptions } from '@tanstack/react-query'

import {
  CtfBusinessInfoQueryVariables,
  useCtfBusinessInfoQuery
} from './__generated/business-info.generated'
import CtfBusinessInfo from './CtfBusinessInfo'

import { getQueryClient } from '@src/lib/get-query-client'

interface CtfBusinessInfoGqlPropsInterface {
  id: string
  preview?: boolean
}

export const getBusinessInfoOptions = ({ id }: CtfBusinessInfoQueryVariables) =>
  queryOptions({
    queryKey: useCtfBusinessInfoQuery.getKey({
      id
    }),
    queryFn: useCtfBusinessInfoQuery.fetcher({ id })
  })

export const CtfBusinessInfoGql = ({ id }: CtfBusinessInfoGqlPropsInterface) => {
  const queryClient = getQueryClient()
  void queryClient.prefetchQuery(getBusinessInfoOptions({ id }))

  return <CtfBusinessInfo id={id} />
}
