import {
  CtfTextBlockQueryVariables,
  useCtfTextBlockQuery
} from './__generated/ctf-text-block.generated'
import { CtfTextBlock } from './CtfTextBlock'

export const CtfTextBlockGql = async ({ id, locale, preview }: CtfTextBlockQueryVariables) => {
  const data = await useCtfTextBlockQuery.fetcher({
    id,
    locale,
    preview
  })()

  return <CtfTextBlock {...data} />
}
