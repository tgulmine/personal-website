import React, { useState, useEffect } from 'react';
import './Hero.scss';

const Hero: React.FC = () => {
  const fullName: string = 'Thiago Gulmine';
  const [myName, setMyName] = useState('');

  useEffect(() => {
    writeName();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function writeName() {
    setTimeout(function() {
      for (let i = 0; i <= fullName.length; i++) {
        timeoutToWrite(i);
      }
    }, 1333);
  }

  function timeoutToWrite(i: number) {
    setTimeout(function() {
      setMyName(fullName.substr(0, i));
    }, i * 69);
  }

  return (
    <div className="flex flex-col mt-16 lg:mt-24 mb-4 lg:mb-16">
      <div className="flex text-hero-title mt-4">
        <div className="flex text-5xl lg:text-6xl font-monaco">
          <div className="mr-4 lg:mr-10 font-mulish">{'>'}</div>
          {myName}
        </div>
        <div className="ml-2 hero-anim w-6 lg:w-12" />
      </div>
      <div className="text-xl lg:text-2xl text-hero-text font-light mt-10 lg:mt-16 leading-loose">
        I am a web developer with around 7 years of programming experience. My current area of interest is frontend
        development.
      </div>
    </div>
  );
};

export default Hero;
