import * as React from 'react';

const TerminalWindow: React.FC = () => {
  return (
    <div className="flex items-center rounded-t-lg bg-terminal-header-bg">
      <div className="ml-2 my-2 w-3.5 h-3.5 rounded-full bg-terminal-header-red" />
      <div className="ml-2 my-2 w-3.5 h-3.5 rounded-full bg-terminal-header-yellow" />
      <div className="ml-2 my-2 w-3.5 h-3.5 rounded-full bg-terminal-header-green" />
    </div>
  );
};

export default TerminalWindow;
