import { DEFAULT_LOCALE } from '@src/lib/locales'

interface FormatCurrencyProps {
  value: number
  locale?: string
  style?: string
  currency?: string
}

export const FormatCurrency = ({ value, locale, currency = 'EUR' }: FormatCurrencyProps) => {
  // const { locale: localeFromRouter } = useContentfulContext()
  const localeFromRouter = DEFAULT_LOCALE

  return <>{new Intl.NumberFormat(locale || localeFromRouter, { currency }).format(value)}</>
}
