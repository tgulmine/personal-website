import * as React from 'react';
import data from '../../data/data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripLinesVertical } from '@fortawesome/free-solid-svg-icons';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col items-center my-24" id="contact">
      <div className="text-section-title text-2xl font-medium">Contact me!</div>
      <div className="mt-6 border-b-8 border-section-border w-16" />
      <div className="flex justify-center text-contact-links text-lg font-normal mt-24">
        <a
          rel="noopener noreferrer"
          href={data.info.email_link}
          target="_blank"
          className="hover:text-navbar-purple
        border-button focus:outline-none"
        >
          {data.info.email}
        </a>
        <FontAwesomeIcon className="mt-5 mb-3 mx-10 text-contact-bar" icon={faGripLinesVertical} />
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
