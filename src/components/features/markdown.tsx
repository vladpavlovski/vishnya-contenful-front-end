import React from 'react';
import parse from 'rehype-parse';
import rehypeReact from 'rehype-react';
import breaks from 'remark-breaks';
import { unified } from 'unified';

const renderer = unified()
  .use(parse)
  .use(breaks)
  .use(rehypeReact, { createElement: React.createElement });

type Props = {
  text: string;
  className?: string;
};

export const Markdown = (props: Props) => {
  return (
    <div className={''} style={{ fontFamily: 'Arial, sans-serif', color: 'black' }}>
      {(renderer.processSync(props.text) as any).result}
    </div>
  );
};
