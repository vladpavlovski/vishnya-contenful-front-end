import { Fragment, jsx } from 'react/jsx-runtime'
import parse from 'rehype-parse'
import rehypeReact from 'rehype-react'
import breaks from 'remark-breaks'
import { unified } from 'unified'

const renderer = unified()
  .use(parse)
  .use(breaks)
  .use(rehypeReact, {
    createElement: jsx,
    Fragment
  } as any)

type Props = {
  text: string
  className?: string
}

export const Markdown = (props: Props) => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: 'black' }}>
      {(renderer.processSync(props.text) as any).result}
    </div>
  )
}
