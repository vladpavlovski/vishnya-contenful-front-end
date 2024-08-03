'use client'
import { useContext, createContext } from 'react'

import contentfulConfig from 'contentful.config'
import i18nConfig from 'next-i18next.config.js'
const { i18n } = i18nConfig

export interface ContentfulContextInterface {
  locale: string
  spaceIds: {
    main: string
  }
}

export const contentfulContextValue: ContentfulContextInterface = {
  locale: i18n.defaultLocale,
  spaceIds: {
    main: contentfulConfig.contentful.space_id
  }
}

export const ContentfulContext = createContext<ContentfulContextInterface>(contentfulContextValue)

export const useContentfulContext = () => useContext(ContentfulContext)

const ContentfulContentProvider = ({ children }) => {
  return (
    <ContentfulContext.Provider
      value={{
        locale: i18n.defaultLocale,
        spaceIds: {
          main: contentfulConfig.contentful.space_id
        }
      }}
    >
      {children}
    </ContentfulContext.Provider>
  )
}

export { ContentfulContentProvider }
