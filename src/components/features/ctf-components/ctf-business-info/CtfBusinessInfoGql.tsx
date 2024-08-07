import {
  CtfBusinessInfoQueryVariables,
  getCtfBusinessInfoOptions
} from './__generated/business-info.generated'
import CtfBusinessInfo from './CtfBusinessInfo'

import { getQueryClient } from '@src/lib/get-query-client'

export const CtfBusinessInfoGql = async (variables: CtfBusinessInfoQueryVariables) => {
  const queryClient = getQueryClient()
  const data = await queryClient.fetchQuery(getCtfBusinessInfoOptions(variables))

  return <CtfBusinessInfo data={data} />
}
