import * as React from 'react';
import './Navbar.scss';

const Navbar: React.FC = () => {
  function clickProjects() {
    console.log('clicked projects');
  }
  function clickContact() {
    console.log('clicked contact');
  }

  return (
    <div className="flex justify-end mt-5">
      <button
        className="mx-10 font-normal text-lg text-gray-700 hover:text-indigo-400 
        border-button focus:outline-none border-transparent"
        onClick={() => clickProjects()}
      >
        Projects
      </button>
      <button
        className="mx-10 font-normal text-lg text-gray-700 hover:text-indigo-400 
        border-button focus:outline-none border-transparent"
        onClick={() => clickContact()}
      >
        Contact
      </button>
    </div>
  );
};

export default Navbar;
