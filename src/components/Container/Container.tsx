import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div
      className="w-full h-full flex flex-col mx-10 mr-auto ml-auto"
      style={{
        maxWidth: 1000
      }}
    >
      {children}
    </div>
  );
};

export default Container;
