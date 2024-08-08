import {
  CtfTextBlockQueryVariables,
  getCtfTextBlockData
} from './__generated/ctf-text-block.generated'
import { CtfTextBlock } from './CtfTextBlock'

export const CtfTextBlockGql = async ({ id, locale, preview }: CtfTextBlockQueryVariables) => {
  const data = await getCtfTextBlockData({
    id,
    locale,
    preview
  })

  return <CtfTextBlock {...data} />
}
