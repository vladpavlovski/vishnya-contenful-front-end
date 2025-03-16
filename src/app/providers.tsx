'use client'
import { QueryClientProvider } from '@tanstack/react-query'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type * as React from 'react'

import { getQueryClient } from '@src/lib/get-query-client'

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const queryClient = getQueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools /> */}
      {children}
    </QueryClientProvider>
  )
}

export default Providers
