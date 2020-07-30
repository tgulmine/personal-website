import * as React from 'react';
import './Navbar.scss';
import { Link } from 'react-scroll';

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-around lg:justify-end mt-5 text-base lg:text-xl text-navbar-gray font-normal">
      <Link
        className="lg:mx-10 hover:text-navbar-purple 
        border-button cursor-pointer"
        to="projects"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        Projects
      </Link>
      <Link
        className="lg:mx-10 hover:text-navbar-purple 
        border-button cursor-pointer"
        to="contact"
        spy={true}
        smooth={true}
        offset={-70}
        duration={700}
      >
        Contact
      </Link>
    </div>
  );
};

export default Navbar;
