import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div
      className="w-full h-full flex flex-col px-5 md:px-10 mr-auto ml-auto"
      style={{
        maxWidth: 1080
      }}
    >
      {children}
    </div>
  );
};

export default Container;
