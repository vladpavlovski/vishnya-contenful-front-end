import { queryOptions } from '@tanstack/react-query'
import { Metadata } from 'next'

import CtfPage from './CtfPage'

import {
  CtfPageQueryVariables,
  useCtfPageQuery
} from '@src/components/features/ctf-components/ctf-page/__generated/ctf-page.generated'
import { PageError } from '@src/components/features/errors/PageError'
import { getQueryClient } from '@src/lib/get-query-client'
import { DEFAULT_LOCALE } from '@src/lib/locales'
import { tryget } from '@src/utils'

export const metadata: Metadata = {
  title: 'My Page Title'
}

interface Props {
  topic?: string
  slug: string
}

export const getCtfPageOptions = ({ slug, locale, preview }: CtfPageQueryVariables) =>
  queryOptions({
    queryKey: useCtfPageQuery.getKey({ slug, locale, preview }),
    queryFn: useCtfPageQuery.fetcher({ slug, locale, preview })
  })

const CtfPageGgl = async ({ slug: slugFromProps }: Props) => {
  const slug = !slugFromProps || slugFromProps === '/' ? 'home' : slugFromProps
  const locale = DEFAULT_LOCALE

  const queryClient = getQueryClient()
  const data = await queryClient.fetchQuery(getCtfPageOptions({ slug, locale, preview: false }))

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
