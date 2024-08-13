import { Markdown } from '@src/components/features/Markdown'

interface SectionHeadlinesPropsInterface {
  headline?: string | null
  headlineProps?: React.HTMLProps<HTMLHeadingElement>
  headlineLivePreviewProps?: any
  subline?: string | null
  sublineProps?: React.HTMLProps<HTMLHeadingElement>
  sublineLivePreviewProps?: any
  body?: string | null
  align?: 'center' | 'left'
  className?: string
}

export const SectionHeadlines = (props: SectionHeadlinesPropsInterface) => {
  const {
    headline,
    headlineProps = {},
    headlineLivePreviewProps = {},
    subline,
    sublineProps = {},
    sublineLivePreviewProps = {},
    body,
    align = 'center',
    className = ''
  } = props

  const computedHeadlineProps: React.HTMLProps<HTMLHeadingElement> & { component?: string } = {
    as: 'h2',
    ...headlineProps,
    ...headlineLivePreviewProps,
    className: ''
  }
  const computedSublineProps: React.HTMLProps<HTMLHeadingElement> = {
    as: 'h3',
    ...sublineProps,
    ...sublineLivePreviewProps,
    className: ''
  }

  if (!headline && !subline && !body) {
    return null
  }

  return (
    <div className={align === 'center' ? '' : '' + ' ' + className}>
      {headline && <h2 {...computedHeadlineProps}>{headline}</h2>}
      {subline && <h3 {...computedSublineProps}>{subline}</h3>}
      {body && <Markdown text={body} />}
    </div>
  )
}
