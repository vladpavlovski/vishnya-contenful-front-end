'use client'
import { usePathname, useRouter } from 'next/navigation'

import { DEFAULT_LOCALE, LOCALES } from '@src/lib/locales'

export const LanguageSelector = () => {
  const router = useRouter()
  const pathname = usePathname()

  const languageNames = new Intl.DisplayNames([], {
    type: 'language'
  })

  return LOCALES.length > 1 ? (
    <div className={''} style={{ display: 'flex', alignItems: 'center' }}>
      language-icon
      <select
        value={DEFAULT_LOCALE}
        onChange={() => {
          router.push(pathname)
        }}
      >
        {LOCALES?.map(availableLocale => (
          <option key={availableLocale} value={availableLocale}>
            {languageNames.of(availableLocale)}
          </option>
        ))}
      </select>
    </div>
  ) : null
}
