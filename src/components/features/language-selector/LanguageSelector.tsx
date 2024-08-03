/* eslint-disable jsx-a11y/no-onchange */
import { useRouter } from 'next/router';
import React from 'react';

export const LanguageSelector = () => {
  const { locale, locales } = useRouter();
  const router = useRouter();

  const languageNames = new Intl.DisplayNames([], {
    type: 'language',
  });

  return locales && locales.length > 1 ? (
    <div className={''} style={{ display: 'flex', alignItems: 'center' }}>
      language-icon
      <select
        value={locale}
        onChange={event => {
          router.push({ pathname: router.pathname, query: router.query }, router.asPath, {
            locale: String(event.target.value),
          });
        }}
      >
        {locales?.map(availableLocale => (
          <option key={availableLocale} value={availableLocale}>
            {languageNames.of(availableLocale)}
          </option>
        ))}
      </select>
    </div>
  ) : null;
};
