import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

const Footer: React.FC = () => {
  return (
    <div className="flex justify-center text-footer text-xs font-normal items-center my-12">
      Made by Thiago Gulmine
      <FontAwesomeIcon className="mx-1" icon={faCopyright} />
      2020
    </div>
  );
};

export default Footer;
