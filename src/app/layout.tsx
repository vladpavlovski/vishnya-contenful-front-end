import { Metadata } from 'next'

import Providers from '@app/providers'
import { Layout } from '@src/components/templates/layout/Layout'
import { DEFAULT_LOCALE } from '@src/lib/locales'
import '@src/styles/globals.css'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
  robots: {
    index: true,
    follow: true
  },
  manifest: '/site.webmanifest'
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactElement
  params: { lang: string }
}) {
  const { lang } = params
  return (
    <html lang={lang || DEFAULT_LOCALE} dir="ltr" suppressHydrationWarning>
      <body>
        <Providers>
          <Layout preview={false}>{children}</Layout>
        </Providers>
      </body>
    </html>
  )
}
