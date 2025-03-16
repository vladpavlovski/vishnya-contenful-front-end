'use client'

import { useCtfInfoBlockQuery } from './__generated/ctf-info-block.generated'
import { CtfInfoBlock } from './CtfInfoBlock'

interface CtfInfoBlockGqlPropsInterface {
  id: string
  locale: string
  preview: boolean
  previousComponent: string | null
}

export const CtfInfoBlockGql = ({
  id,
  locale,
  preview,
  previousComponent
}: CtfInfoBlockGqlPropsInterface) => {
  const { isLoading, data } = useCtfInfoBlockQuery({
    id,
    locale,
    preview
  })

  const componentInfoBlock = data?.componentInfoBlock

  if (isLoading || !componentInfoBlock) {
    return null
  }

  const { __typename, sys } = componentInfoBlock

  return <CtfInfoBlock __typename={__typename} sys={sys} previousComponent={previousComponent} />
}
