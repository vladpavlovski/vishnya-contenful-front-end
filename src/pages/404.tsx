import { dehydrate, QueryClient } from '@tanstack/react-query'
import { GetStaticProps } from 'next'

import { useCtfFooterQuery } from '@src/components/features/ctf-components/ctf-footer/__generated/ctf-footer.generated'
import { useCtfNavigationQuery } from '@src/components/features/ctf-components/ctf-navigation/__generated/ctf-navigation.generated'
import { PageError } from '@src/components/features/errors/page-error'
import { getServerSideTranslations } from '@src/lib/get-serverside-translations'

const ErrorPage404 = () => {
  return <PageError error={{ code: 404 }} />
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: useCtfNavigationQuery.getKey({ locale, preview: false }),
    queryFn: useCtfNavigationQuery.fetcher({ locale, preview: false })
  })
  await queryClient.prefetchQuery({
    queryKey: useCtfFooterQuery.getKey({ locale, preview: false }),
    queryFn: useCtfFooterQuery.fetcher({ locale, preview: false })
  })

  return {
    props: {
      ...(await getServerSideTranslations(locale)),
      dehydratedState: dehydrate(queryClient)
    }
  }
}

export default ErrorPage404
