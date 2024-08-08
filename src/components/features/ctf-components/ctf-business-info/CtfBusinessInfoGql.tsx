import {
  CtfBusinessInfoQueryVariables,
  getCtfBusinessInfoData
} from './__generated/business-info.generated'
import CtfBusinessInfo from './CtfBusinessInfo'

export const CtfBusinessInfoGql = async (variables: CtfBusinessInfoQueryVariables) => {
  const data = await getCtfBusinessInfoData(variables)

  return <CtfBusinessInfo data={data} />
}
