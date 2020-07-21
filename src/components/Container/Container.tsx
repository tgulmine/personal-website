import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="w-full h-full flex flex-col px-10 max-w-5xl mr-auto ml-auto">{children}</div>;
};

export default Container;
