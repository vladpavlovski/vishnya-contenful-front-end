import {
  CtfBusinessInfoQueryVariables,
  useCtfBusinessInfoQuery
} from './__generated/business-info.generated'
import CtfBusinessInfo from './CtfBusinessInfo'

export const CtfBusinessInfoGql = async (variables: CtfBusinessInfoQueryVariables) => {
  const data = await useCtfBusinessInfoQuery.fetcher(variables)()

  return <CtfBusinessInfo data={data} />
}
