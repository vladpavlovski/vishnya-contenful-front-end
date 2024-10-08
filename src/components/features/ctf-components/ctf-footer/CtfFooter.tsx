'use client'
import { useContentfulInspectorMode } from '@contentful/live-preview/react'

import { CtfFooterQuery } from '@src/components/features/ctf-components/ctf-footer/__generated/ctf-footer.generated'
import {
  getLinkDisplayText,
  getLinkHrefPrefix
} from '@src/components/features/ctf-components/ctf-navigation/utils'
import { LanguageSelector } from '@src/components/features/language-selector/LanguageSelector'
import { Link } from '@src/components/shared/Link'
import { useContentfulContext } from '@src/contentful-context'

export const CtfFooter = ({ footerMenuCollection }: CtfFooterQuery) => {
  const footerContent = footerMenuCollection?.items?.[0]

  const { locale } = useContentfulContext()
  const inspectorMode = useContentfulInspectorMode()

  const renderMenuGroupLinks = (menuGroup, listClassName) => {
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

  const containerProps = footerContent?.sys?.id
    ? inspectorMode({
        entryId: footerContent.sys.id,
        fieldId: 'menuItems',
        locale
      })
    : undefined

  return (
    <div {...containerProps}>
      <div>
        <footer>
          {footerContent?.menuItemsCollection?.items?.length && (
            <nav role="navigation">
              {footerContent.menuItemsCollection.items.map(
                menuItem =>
                  menuItem && (
                    <div key={menuItem.sys.id}>
                      <ul>
                        <li>
                          <p
                            {...inspectorMode({
                              entryId: menuItem.sys.id,
                              fieldId: 'groupName',
                              locale
                            })}
                          >
                            {menuItem.groupName}
                          </p>
                          {menuItem.featuredPagesCollection && (
                            <ul>
                              {renderMenuGroupLinks(
                                menuItem.featuredPagesCollection,

                                ''
                              )}
                            </ul>
                          )}
                        </li>
                      </ul>
                    </div>
                  )
              )}
            </nav>
          )}
          <section>
            <LanguageSelector />
          </section>
        </footer>
      </div>
      <div>
        <section>
          <div>
            <div>Logo here</div>

            <section>
              <p>{`Copyright ${new Date().getFullYear()}`}</p>
              {footerContent?.legalLinks?.featuredPagesCollection?.items?.length && (
                <nav role="navigation">
                  <ul>
                    {renderMenuGroupLinks(footerContent.legalLinks.featuredPagesCollection, '')}
                  </ul>
                </nav>
              )}
            </section>
          </div>

          <div>
            <div>
              <p>{`find Us On`}</p>
              <div>
                {footerContent?.twitterLink && (
                  <a
                    href={footerContent.twitterLink}
                    title={`Twitter`}
                    target="_blank"
                    rel="nofollow noreferrer"
                  >
                    Twitter-icon
                  </a>
                )}
                {footerContent?.facebookLink && (
                  <a
                    href={footerContent.facebookLink}
                    title={`Facebook`}
                    target="_blank"
                    rel="nofollow noreferrer"
                  >
                    Facebook-icon
                  </a>
                )}
                {footerContent?.linkedinLink && (
                  <a href={footerContent.linkedinLink} title={`LinkedIn`} rel="nofollow noreferrer">
                    LinkedIn-icon
                  </a>
                )}
                {footerContent?.instagramLink && (
                  <a
                    href={footerContent.instagramLink}
                    title={`Instagram`}
                    target="_blank"
                    rel="nofollow noreferrer"
                  >
                    Instagram-icon
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
