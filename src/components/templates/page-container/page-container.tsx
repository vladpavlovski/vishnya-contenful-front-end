import clsx from 'clsx';
import React from 'react';

type Props = {
  className?: string;
  children?: React.ReactNode | React.ReactNode[];
};

export const PageContainer = (props: Props) => {
  return <div className={clsx(props.className)}>{props.children}</div>;
};
