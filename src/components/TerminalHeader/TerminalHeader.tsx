import * as React from 'react';

const TerminalWindow: React.FC = () => {
  return (
    <div className="flex items-center rounded-t-lg bg-gray-400">
      <div className="ml-2 my-2 w-3.5 h-3.5 rounded-full bg-red-500" />
      <div className="ml-2 my-2 w-3.5 h-3.5 rounded-full bg-yellow-500" />
      <div className="ml-2 my-2 w-3.5 h-3.5 rounded-full bg-green-500" />
    </div>
  );
};

export default TerminalWindow;
