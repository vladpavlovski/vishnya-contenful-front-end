import { useCtfFooterQuery } from '@src/components/features/ctf-components/ctf-footer/__generated/ctf-footer.generated'
import { useCtfNavigationQuery } from '@src/components/features/ctf-components/ctf-navigation/__generated/ctf-navigation.generated'
import { PageError } from '@src/components/features/errors/PageError'
import { getQueryClient } from '@src/lib/get-query-client'

const ErrorPage404 = async () => {
  const queryClient = getQueryClient()

  const locale = 'en-US'

  await queryClient.prefetchQuery({
    queryKey: useCtfNavigationQuery.getKey({ locale, preview: false }),
    queryFn: useCtfNavigationQuery.fetcher({ locale, preview: false })
  })
  await queryClient.prefetchQuery({
    queryKey: useCtfFooterQuery.getKey({ locale, preview: false }),
    queryFn: useCtfFooterQuery.fetcher({ locale, preview: false })
  })
  return <PageError error={{ code: 404 }} />
}

export default ErrorPage404
