import * as React from 'react';
import data from '../../data/data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripLinesVertical } from '@fortawesome/free-solid-svg-icons';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-24 mb-8 lg:mb-24" id="contact">
      <div className="text-section-title text-3xl font-medium">Contact me!</div>
      <div className="mt-6 border-b-8 border-section-border w-16 lg:mb-4" />
      <div
        className="flex lg:justify-center flex-col items-center lg:flex-row text-contact-links
      text-xl font-base mt-20 lg:mt-24 lg:mb-4 font-mulish"
      >
        <a
          rel="noopener noreferrer"
          href={data.info.email_link}
          target="_blank"
          className="hover:text-navbar-purple
        border-button focus:outline-none"
        >
          {data.info.email}
        </a>
        <FontAwesomeIcon className="mt-1 mx-10 text-contact-bar hidden lg:block font-thin" icon={faGripLinesVertical} />
        <a
          rel="noopener noreferrer"
          href={data.info.linkedin_link}
          target="_blank"
          className="hover:text-navbar-purple
        border-button focus:outline-none"
        >
          LinkedIn
        </a>
        <FontAwesomeIcon className="mt-1 mx-10 text-contact-bar hidden lg:block" icon={faGripLinesVertical} />
        <a
          rel="noopener noreferrer"
          href={data.info.git_link}
          target="_blank"
          className="hover:text-navbar-purple
        border-button focus:outline-none"
        >
          github
        </a>
      </div>
    </div>
  );
};

export default Contact;
