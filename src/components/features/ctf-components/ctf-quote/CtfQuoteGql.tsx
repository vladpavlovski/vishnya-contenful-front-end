import { CtfQuoteQueryVariables, getCtfQuoteData } from './__generated/ctf-quote.generated'
import { CtfQuote } from './CtfQuote'

export const CtfQuoteGql = async (props: CtfQuoteQueryVariables) => {
  const data = await getCtfQuoteData(props)

  return <CtfQuote {...data} />
}
