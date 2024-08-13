'use client'

import { CtfNavigationQuery } from '@src/components/features/ctf-components/ctf-navigation/__generated/ctf-navigation.generated'
import {
  getLinkDisplayText,
  getLinkHrefPrefix
} from '@src/components/features/ctf-components/ctf-navigation/utils'
import { Link } from '@src/components/shared/Link'

export const CtfMobileMenu = (props: CtfNavigationQuery) => {
  const isOpen = false
  const onOpenChange = (isOpen: boolean) => {
    console.log({ isOpen })
  }
  const onCloseClick = (e, reason) => {
    if (reason === 'backdropClick') {
      onOpenChange(false)
    }
  }

  const mobileMenuContent = props.navigationMenuCollection?.items?.[0]

  const renderMobileMenuLinks = menuGroup => {
    return menuGroup?.items?.map(menuItem => {
      const href = getLinkHrefPrefix(menuItem)
      const linkText = getLinkDisplayText(menuItem)
      return (
        <li key={menuItem.sys.id}>
          <Link href={href}>{linkText}</Link>
        </li>
      )
    })
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <div
      role="dialog"
      id="mobile-menu"
      aria-modal={true}
      onClick={e => onCloseClick(e, 'backdropClick')}
      style={{
        display: isOpen ? 'block' : 'none',
        position: 'fixed',
        top: 0,
        right: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        zIndex: 1000,
        overflowY: 'auto'
      }}
    >
      {mobileMenuContent?.menuItemsCollection?.items.length && (
        <nav role="navigation" style={{ padding: '4rem 8rem' }}>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {mobileMenuContent.menuItemsCollection.items.map(menuItem =>
              menuItem ? (
                <li
                  key={menuItem.sys.id}
                  style={{
                    cursor: 'default',
                    display: 'block',
                    fontSize: '2.1rem',
                    lineHeight: '1.8',
                    position: 'relative'
                  }}
                >
                  {!menuItem.link ? (
                    menuItem.groupName
                  ) : (
                    <Link href={`/${menuItem.link.slug}`}>{menuItem.groupName}</Link>
                  )}
                  {!menuItem.link && menuItem.children && (
                    <ul
                      style={{
                        borderLeft: '1px solid #eee',
                        listStyle: 'none',
                        padding: '0 0 0 2rem'
                      }}
                    >
                      {renderMobileMenuLinks(menuItem.children)}
                    </ul>
                  )}
                </li>
              ) : null
            )}
          </ul>
        </nav>
      )}
    </div>
  )
}
