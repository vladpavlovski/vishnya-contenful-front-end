import {
  CtfProductTableQueryVariables,
  getCtfProductTableData
} from './__generated/ctf-product-table.generated'
import { CtfProductTable } from './CtfProductTable'

import { EntryNotFound } from '@src/components/features/errors/EntryNotFound'

export const CtfProductTableGql = async (props: CtfProductTableQueryVariables) => {
  const data = await getCtfProductTableData(props)

  if (!data) {
    return <EntryNotFound />
  }

  return <CtfProductTable {...data} />
}
