'use client'
import { useContentfulInspectorMode } from '@contentful/live-preview/react'
import { useTranslation } from 'next-i18next'

import { FooterFieldsFragment } from './__generated/ctf-footer.generated'

import {
  getLinkDisplayText,
  getLinkHrefPrefix
} from '@src/components/features/ctf-components/ctf-navigation/utils'
import { LanguageSelector } from '@src/components/features/language-selector'
import { Link } from '@src/components/shared/link'
import { useContentfulContext } from '@src/contentful-context'

export const CtfFooter = (props: FooterFieldsFragment) => {
  const footerContent = props.items[0]

  const { t } = useTranslation()
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
          <Link href={href} className={''}>
            {linkText}
          </Link>
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
    <>
      <div {...containerProps} className="">
        <footer className="">
          {footerContent?.menuItemsCollection?.items?.length && (
            <nav role="navigation" className="">
              {footerContent.menuItemsCollection.items.map(
                menuItem =>
                  menuItem && (
                    <div key={menuItem.sys.id} className={''}>
                      <ul className={''}>
                        <li>
                          <p
                            className={''}
                            {...inspectorMode({
                              entryId: menuItem.sys.id,
                              fieldId: 'groupName',
                              locale
                            })}
                          >
                            {menuItem.groupName}
                          </p>
                          {menuItem.featuredPagesCollection && (
                            <ul className={''}>
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
          <section className={''}>
            <LanguageSelector />
          </section>
        </footer>
      </div>
      <div className={''}>
        <section className={''}>
          <div className={''}>
            <div className={''}>Logog here</div>

            <section className={''}>
              <p className={''}>{t('legal.copyright', { year: new Date().getFullYear() })}</p>
              {footerContent?.legalLinks?.featuredPagesCollection?.items?.length && (
                <nav role="navigation" className={''}>
                  <ul className={''}>
                    {renderMenuGroupLinks(footerContent.legalLinks.featuredPagesCollection, '')}
                  </ul>
                </nav>
              )}
            </section>
          </div>

          <div className={''}>
            <div className={''}>
              <p className={''}>{t('socials.findUsOn')}</p>
              <div className={''}>
                {footerContent?.twitterLink && (
                  <a
                    href={footerContent.twitterLink}
                    title={t('socials.twitter')}
                    target="_blank"
                    rel="nofollow noreferrer"
                  >
                    Twitter-icon
                  </a>
                )}
                {footerContent?.facebookLink && (
                  <a
                    href={footerContent.facebookLink}
                    title={t('socials.facebook')}
                    target="_blank"
                    rel="nofollow noreferrer"
                  >
                    Facebook-icon
                  </a>
                )}
                {footerContent?.linkedinLink && (
                  <a
                    href={footerContent.linkedinLink}
                    title={t('socials.linkedin')}
                    target="_blank"
                    rel="nofollow noreferrer"
                  >
                    LinkedIn-icon
                  </a>
                )}
                {footerContent?.instagramLink && (
                  <a
                    href={footerContent.instagramLink}
                    title={t('socials.instagram')}
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
    </>
  )
}
