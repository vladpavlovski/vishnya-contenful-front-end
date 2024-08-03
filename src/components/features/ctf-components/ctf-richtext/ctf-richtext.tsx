import { useContentfulLiveUpdates } from '@contentful/live-preview/react'
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer'
import { Block as RichtextBlock, BLOCKS, INLINES } from '@contentful/rich-text-types'
import React, { useMemo, useCallback } from 'react'

import { CtfAsset } from '../ctf-asset/ctf-asset'

import { AssetFieldsFragment } from '@src/components/features/ctf-components/ctf-asset/__generated/ctf-asset.generated'
import { useCtfRichTextHyperlinkQuery } from '@src/components/features/ctf-components/ctf-richtext/__generated/ctf-richtext.generated'
import { PageLink } from '@src/components/features/page-link'
import { ComponentResolver } from '@src/components/shared/component-resolver'
import { useContentfulContext } from '@src/contentful-context'
import { OmitRecursive, tryget } from '@src/utils'

interface Block extends RichtextBlock {
  __typename: string
  sys: { id: string }
}

type Asset = OmitRecursive<AssetFieldsFragment, '__typename'>

interface CtfRichtextPropsInterface {
  json: any
  links?: {
    entries?: {
      block?: any
      inline?: any
    } | null
    assets?: {
      block?: any
    } | null
  } | null
  className?: string
  containerClassName?: string
  gridClassName?: string
}

const EntryHyperlink = ({ node }) => {
  const { previewActive, locale } = useContentfulContext()

  const { isLoading, data } = useCtfRichTextHyperlinkQuery({
    locale,
    id: node.data?.target.sys.id,
    preview: previewActive
  })

  const page = useContentfulLiveUpdates(data?.page)

  if (!data || isLoading) return null

  if (page) {
    return (
      <PageLink page={page} variant="contained" underline>
        {(node.content[0] as any).value}
      </PageLink>
    )
  }

  return null
}

export const CtfRichtext = (props: CtfRichtextPropsInterface) => {
  const { json, links, containerClassName, gridClassName } = props

  const entryBlocks = useMemo(
    () => tryget(() => links!.entries!.block!.filter(b => !!b), [] as Block[])!,
    [links]
  )

  const assetBlocks = useMemo(
    () => tryget(() => links!.assets!.block!.filter(b => !!b), [] as Asset[])!,
    [links]
  )

  const ParagraphGridContainer = useCallback(
    (containerProps: { children?: any }) => {
      return (
        <div>
          <div className={containerClassName}>
            <div className={gridClassName}>{containerProps.children}</div>
          </div>
        </div>
      )
    },
    [containerClassName, gridClassName]
  )

  const options = useMemo(() => {
    const opts: Options = {}
    opts.renderNode = {
      [INLINES.EMBEDDED_ENTRY]: node => {
        const id = tryget(() => node.data.target.sys.id)
        if (id) {
          return (
            <ComponentResolver
              componentProps={{ sys: { id }, __typename: 'NtMergetag' }}
              className={''}
              inline
            />
          )
        }
        return <>{`${node.nodeType} ${id}`}</>
      },
      [BLOCKS.EMBEDDED_ENTRY]: node => {
        const id = tryget(() => node.data.target.sys.id)
        if (id) {
          const entry = entryBlocks.find(block => block!.sys.id === id)

          if (entry) {
            return <ComponentResolver componentProps={entry} className={''} />
          }
        }
        return <>{`${node.nodeType} ${id}`}</>
      },
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const id = tryget(() => node.data.target.sys.id)
        if (id) {
          const asset = assetBlocks.find(block => block!.sys.id === id)

          return (
            <ParagraphGridContainer>
              <CtfAsset {...asset} />
            </ParagraphGridContainer>
          )
        }

        return <>{`${node.nodeType} ${id}`}</>
      },
      'entry-hyperlink': node => {
        return <EntryHyperlink node={node} />
      }
    }

    const hrRenderer = () => {
      return (
        <ParagraphGridContainer>
          <hr />
        </ParagraphGridContainer>
      )
    }

    interface ParagraphRendererInterface {
      variant?: string
      className?: string
      component?: React.ElementType
    }

    const paragraphRenderer =
      (rendererProps: ParagraphRendererInterface = {}) =>
      (_node, children) => {
        const { variant, className, component } = rendererProps

        if (!variant) {
          return <ParagraphGridContainer>{children}</ParagraphGridContainer>
        }

        if (component) {
          return (
            <ParagraphGridContainer>
              <div className={className}>
                {children}
                {component}
              </div>
            </ParagraphGridContainer>
          )
        }

        return (
          <ParagraphGridContainer>
            <div className={className}>{children}</div>
          </ParagraphGridContainer>
        )
      }

    opts.renderNode![BLOCKS.PARAGRAPH] = paragraphRenderer({
      variant: 'body1'
    })
    opts.renderNode![BLOCKS.HEADING_1] = paragraphRenderer({ variant: 'h1', component: 'h2' })
    opts.renderNode![BLOCKS.HEADING_2] = paragraphRenderer({ variant: 'h2', component: 'h2' })
    opts.renderNode![BLOCKS.HEADING_3] = paragraphRenderer({ variant: 'h3', component: 'h2' })
    opts.renderNode![BLOCKS.HEADING_4] = paragraphRenderer({ variant: 'h4', component: 'h2' })
    opts.renderNode![BLOCKS.HEADING_5] = paragraphRenderer({ variant: 'h5', component: 'h2' })
    opts.renderNode![BLOCKS.HEADING_6] = paragraphRenderer({ variant: 'h6', component: 'h2' })
    opts.renderNode![BLOCKS.QUOTE] = paragraphRenderer({
      component: 'blockquote',
      variant: 'body1'
    })
    opts.renderNode![BLOCKS.TABLE] = (_, children) => {
      return (
        <ParagraphGridContainer>
          <div
            style={{
              overflow: 'auto'
            }}
          >
            <table>{children}</table>
          </div>
        </ParagraphGridContainer>
      )
    }
    opts.renderNode![BLOCKS.HR] = hrRenderer
    opts.renderNode![BLOCKS.LIST_ITEM] = (_, children) => <li className={''}>{children}</li>

    opts.renderText = text => {
      return text.split('\n').reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={textSegment} />, textSegment]
      }, [] as any[])
    }

    return opts
  }, [ParagraphGridContainer, assetBlocks, entryBlocks])

  return <div className={props.className}>{documentToReactComponents(json, options)}</div>
}
