import { Metadata } from 'next'

import Providers from '@app/[lang]/providers'
import { Layout } from '@src/components/templates/layout/Layout'
import { DEFAULT_LOCALE } from '@src/lib/locales'

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
      <head>
        <meta charSet="utf-8" />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        /> */}

        {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" /> */}
      </head>
      <body suppressHydrationWarning>
        <Providers>
          <Layout preview={false}>{children}</Layout>
        </Providers>
      </body>
    </html>
  )
}
