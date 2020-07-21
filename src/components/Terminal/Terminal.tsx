import * as React from 'react';
import { TerminalHeader } from '../TerminalHeader';
import { TerminalWindow } from '../TerminalWindow';

const Terminal: React.FC = () => {
  return (
    <div className="flex flex-col mt-10">
      <TerminalHeader />
      <TerminalWindow />
    </div>
  );
};

export default Terminal;
