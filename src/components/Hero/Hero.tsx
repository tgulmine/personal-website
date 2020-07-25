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
    <div className="flex flex-col mt-24 mb-16">
      <div className="flex text-hero-title mt-4 text-6xl">
        <div className="flex text-6xl font-monaco">
          <div className="mr-10 font-camphor">{'>'}</div>
          {myName}
        </div>
        <div className="ml-2 hero-anim w-12" />
      </div>
      <div className="text-xl text-hero-text font-light mt-16">
        I am a web developer with around 7 years of programming experience. My current area of interest is frontend
        development.
      </div>
    </div>
  );
};

export default Hero;
