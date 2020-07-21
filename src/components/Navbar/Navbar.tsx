import * as React from 'react';

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
        className="mx-10 py-4 font-normal text-lg text-gray-700 hover:text-indigo-400 
        border-b-8 border-transparent hover:border-indigo-500 focus:outline-none"
        style={{
          transition: 'border-color 0.5s, color 0.5s',
          transitionTimingFunction: 'easy-in-out'
        }}
        onClick={() => clickProjects()}
      >
        Projects
      </button>
      <button
        className="mx-10 py-4 font-normal text-lg text-gray-700 hover:text-indigo-400 
        border-b-8 border-transparent hover:border-indigo-500 focus:outline-none"
        style={{
          transition: 'border-color 0.5s, color 0.5s',
          transitionTimingFunction: 'easy-in-out'
        }}
        onClick={() => clickContact()}
      >
        Contact
      </button>
    </div>
  );
};

export default Navbar;
