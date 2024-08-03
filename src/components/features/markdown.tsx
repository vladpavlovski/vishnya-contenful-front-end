import React from 'react'
import * as prod from 'react/jsx-runtime'
import parse from 'rehype-parse'
import rehypeReact from 'rehype-react'
import breaks from 'remark-breaks'
import { unified } from 'unified'

const production = { Fragment: prod.Fragment, jsx: prod.jsx, jsxs: prod.jsxs }
// @ts-expect-error: the react types are missing.
const renderer = unified().use(parse).use(breaks).use(rehypeReact, production)

type Props = {
  text: string
  className?: string
}

export const Markdown = (props: Props) => {
  return (
    <div className={''} style={{ fontFamily: 'Arial, sans-serif', color: 'black' }}>
      {(renderer.processSync(props.text) as any).result}
    </div>
  )
}
