'use client'
import { useContentfulInspectorMode } from '@contentful/live-preview/react'

import { CtfNavigationQuery } from './__generated/ctf-navigation.generated'
import { getLinkDisplayText, getLinkHrefPrefix } from './utils'

import { Link } from '@src/components/shared/Link'

export const CtfNavigation = ({ navigationMenuCollection }: CtfNavigationQuery) => {
  const inspectorMode = useContentfulInspectorMode()

  const navigationContent = navigationMenuCollection?.items?.[0]

  const renderNavigationLinks = (menuGroup, listClassName) => {
    return menuGroup?.items?.map(menuItem => {
      const href = getLinkHrefPrefix(menuItem)
      const linkText = getLinkDisplayText(menuItem)

      return (
        <li
          key={menuItem.sys.id}
          className={listClassName}
          {...inspectorMode({
            entryId: menuItem.sys.id,
            fieldId: 'pageName'
          })}
        >
          <Link href={href}>{linkText}</Link>
        </li>
      )
    })
  }

  return (
    <>
      {navigationContent?.menuItemsCollection?.items.length && (
        <nav role="navigation">
          <ul
            style={{
              alignItems: 'center',
              display: 'flex',
              listStyle: 'none',
              margin: 0,
              padding: 0
            }}
          >
            {navigationContent.menuItemsCollection.items.map(
              menuItem =>
                menuItem && (
                  <li
                    key={menuItem.sys.id}
                    style={{
                      alignItems: 'center',
                      cursor: 'default',
                      display: 'inline-flex',
                      fontSize: '1.7rem',
                      fontWeight: 400,
                      height: '8rem',
                      lineHeight: 1.9,
                      marginRight: '4rem', // Assuming theme.spacing(8) is 4rem
                      position: 'relative'
                    }}
                    {...inspectorMode({
                      entryId: menuItem.sys.id,
                      fieldId: 'groupName'
                    })}
                  >
                    {!menuItem.link ? (
                      menuItem.groupName
                    ) : (
                      <Link href={`/${menuItem.link.slug}`}>{menuItem.groupName}</Link>
                    )}
                    {!menuItem.link && menuItem.children && (
                      <ul
                        style={{
                          backgroundColor: '#fff',
                          boxShadow: '0 3px 6px #00000029',
                          borderRadius: '14px',
                          left: '-4rem', // Assuming theme.spacing(10 * -1) is -4rem
                          listStyle: 'none',
                          opacity: 0,
                          padding: '2rem 4rem', // Assuming theme.spacing(4, 10) is 2rem 4rem
                          pointerEvents: 'none',
                          position: 'absolute',
                          top: 'calc(100% - 2rem)',
                          transform: 'translateY(20%)',
                          transition: 'all 0.3s ease-in-out'
                        }}
                      >
                        {renderNavigationLinks(menuItem.children, '')}
                      </ul>
                    )}
                  </li>
                )
            )}
          </ul>
        </nav>
      )}
    </>
  )
}
