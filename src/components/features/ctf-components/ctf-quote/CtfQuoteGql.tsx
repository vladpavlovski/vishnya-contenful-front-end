import { CtfQuoteQueryVariables, useCtfQuoteQuery } from './__generated/ctf-quote.generated'
import { CtfQuote } from './CtfQuote'

export const CtfQuoteGql = async (props: CtfQuoteQueryVariables) => {
  const data = await useCtfQuoteQuery.fetcher(props)()

  return <CtfQuote {...data} />
}
