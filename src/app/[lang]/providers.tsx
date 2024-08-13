'use client'
import { ContentfulLivePreviewProvider } from '@contentful/live-preview/react'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type * as React from 'react'

import { ContentfulContentProvider } from '@src/contentful-context'
import { getQueryClient } from '@src/lib/get-query-client'

const LivePreviewProvider = ({
  children,
  locale
}: {
  children: React.ReactElement
  locale: string
}) => {
  // TODO: update the logic to use the previewActive flag
  return (
    <ContentfulLivePreviewProvider
      locale={locale}
      enableInspectorMode={false}
      enableLiveUpdates={false}
    >
      {children}
    </ContentfulLivePreviewProvider>
  )
}

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const queryClient = getQueryClient()

  return (
    <ContentfulContentProvider>
      <LivePreviewProvider locale={'en-US'}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools />
          {children}
        </QueryClientProvider>
      </LivePreviewProvider>
    </ContentfulContentProvider>
  )
}

export default Providers
