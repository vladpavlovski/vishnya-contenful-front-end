'use client'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import queryString from 'query-string'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  href?: string
  as?: string
  target?: string
  dropUrlParams?: boolean
  className?: string
  withoutMaterial?: boolean
  underline?: boolean
  onClick?: () => any
  isButton?: boolean
  variant?: 'text' | 'outlined' | 'contained' | undefined
  size?: 'small' | 'medium' | 'large' | undefined
  color?: any
  startIcon?: any
  endIcon?: any
  urlParams?: string
  title?: string
}
export type LinkProps = Props

export const Link = (props: Props) => {
  const {
    dropUrlParams,
    className,
    children,
    withoutMaterial,
    underline,
    onClick,
    isButton = false,
    color,
    urlParams = '',
    title
  } = props
  const pathname = usePathname()
  let href = props.href || ''
  let { as } = props

  if (!dropUrlParams && pathname) {
    const urlQuerystring = pathname.split('?')[1]
    if (urlQuerystring) {
      href += href.indexOf('?') < 0 ? `?${urlQuerystring}` : `&${urlQuerystring}`
    }
  }

  if (urlParams !== '') {
    const parsedUrlParams = queryString.parse(urlParams)
    const parsedHref = queryString.parseUrl(href)

    const mergedParsedHref = {
      ...parsedHref,
      query: {
        ...parsedHref.query,
        ...parsedUrlParams
      }
    }

    href = queryString.stringifyUrl(mergedParsedHref)

    if (as !== undefined) {
      const parsedAs = queryString.parseUrl(as)

      const mergedParsedAs = {
        ...parsedAs,
        query: {
          ...parsedAs.query,
          ...parsedUrlParams
        }
      }

      as = queryString.stringifyUrl(mergedParsedAs)
    }
  }

  if (props.href === undefined || props.href === null) return <>{props.children}</>

  const external = href.startsWith('http://') || href.startsWith('https://')
  const underlineStyle = underline ? 'always' : 'none'

  if (external === true || !href) {
    return isButton ? (
      <button
        className={className}
        style={{ color: color }}
        onClick={() => onClick && onClick()}
        title={title}
      >
        {children}
      </button>
    ) : (
      <a
        className={className}
        style={{ textDecoration: underlineStyle, color: color }}
        href={href}
        target={props.target}
        rel="noopener noreferrer"
        onClick={() => onClick && onClick()}
        title={title}
      >
        {children}
      </a>
    )
  }

  if (withoutMaterial === true) {
    return (
      <NextLink href={href} as={as} passHref className={''} title={title}>
        {children}
      </NextLink>
    )
  }

  if (isButton === true) {
    return (
      <NextLink href={href} as={as} passHref legacyBehavior>
        <button
          className={className}
          style={{ color: color }}
          onClick={() => onClick && onClick()}
          title={title}
        >
          {children}
        </button>
      </NextLink>
    )
  }

  return (
    <NextLink
      href={href}
      as={as}
      passHref
      role="link"
      tabIndex={0}
      className={className}
      style={{ textDecoration: underlineStyle, color: color }}
      onClick={() => onClick && onClick()}
      title={title}
    >
      {children}
    </NextLink>
  )
}
