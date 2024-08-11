import { Metadata } from 'next'

import CtfPage from './CtfPage'

import { useCtfPageQuery } from '@src/components/features/ctf-components/ctf-page/__generated/ctf-page.generated'
import { PageError } from '@src/components/features/errors/PageError'
import { DEFAULT_LOCALE } from '@src/lib/locales'
import { tryget } from '@src/utils'

export const metadata: Metadata = {
  title: 'My Page Title'
}

interface Props {
  topic?: string
  slug: string
}

const CtfPageGgl = async ({ slug: slugFromProps }: Props) => {
  const slug = !slugFromProps || slugFromProps === '/' ? 'home' : slugFromProps
  const locale = DEFAULT_LOCALE

  const data = await useCtfPageQuery.fetcher({ slug, locale, preview: false })()

  const page = tryget(() => data?.pageCollection!.items[0])

  if (!page) {
    const error = {
      code: 404,
      message:
        'We were not able to locate the content you were looking for, please check the url for possible typos'
    }
    return <PageError error={error} />
  }

  return <CtfPage {...page} />
}

export default CtfPageGgl
