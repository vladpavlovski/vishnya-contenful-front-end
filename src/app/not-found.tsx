import { useCtfFooterQuery } from '@src/components/features/ctf-components/ctf-footer/__generated/ctf-footer.generated'
import { useCtfNavigationQuery } from '@src/components/features/ctf-components/ctf-navigation/__generated/ctf-navigation.generated'
import { PageError } from '@src/components/features/errors/PageError'
import { getQueryClient } from '@src/lib/get-query-client'
// Define a function to render the 404 error page
const ErrorPage404 = async () => {
  // Get an instance of the query client for caching and prefetching queries
  const queryClient = getQueryClient()

  // Set the locale to 'en-US' for fetching data from the CTF components
  const locale = 'en-US'

  // Prefetch the navigation query with the specified locale and preview flag set to false
  await queryClient.prefetchQuery({
    queryKey: useCtfNavigationQuery.getKey({ locale, preview: false }),
    queryFn: useCtfNavigationQuery.fetcher({ locale, preview: false })
  })

  // Prefetch the footer query with the specified locale and preview flag set to false
  await queryClient.prefetchQuery({
    queryKey: useCtfFooterQuery.getKey({ locale, preview: false }),
    queryFn: useCtfFooterQuery.fetcher({ locale, preview: false })
  })

  // Return a PageError component with a code of 404 for rendering the error page
  return <PageError error={{ code: 404 }} />
}
export default ErrorPage404
