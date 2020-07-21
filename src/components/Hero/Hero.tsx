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
    for (let i = 0; i <= fullName.length; i++) {
      timeoutToWrite(i);
    }
  }

  function timeoutToWrite(i: number) {
    setTimeout(function() {
      setMyName(fullName.substr(0, i));
    }, i * 69);
  }

  return (
    <div className="flex flex-col mt-24">
      <div className="flex text-indigo-500 mt-4 text-6xl">
        <div className="text-6xl">
          {'>'}
          &nbsp;&nbsp;&nbsp;{myName}&nbsp;
        </div>
        <div className="hero-anim w-10" />
      </div>
      <div className="text-xl text-gray-700 font-light mt-16">
        I am a web developer with around 7 years of programming experience. My current area of interest is frontend
        development.
      </div>
    </div>
  );
};

export default Hero;
