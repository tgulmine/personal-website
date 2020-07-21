import * as React from 'react';

interface IInfo {
  title: string;
  link: string;
}

interface IContact {
  gmail: IInfo;
  github: IInfo;
}

const TerminalHeader: React.FC = () => {
  const name: string = 'Thiago';
  const currentLocation: string = 'Brazil, Brasília - DF';
  const contactInfo: IContact = {
    gmail: {
      title: 'tgulmine@gmail.com',
      link: 'mailto:tgulmine@gmail.com'
    },
    github: {
      title: 'github',
      link: 'https://github.com/tgulmine'
    }
  };
  const resume: IInfo = {
    title: 'tgulmine.pdf',
    link: 'https://drive.google.com/file/d/1liCl-M31hGRxE5l-SbFM2ULQo5L5lUAZ'
  };
  const interests: string[] = ['coding', 'gaming', 'coffee', 'reading'];
  const education: string = 'Digital Games, Instituto de Educação Superior de Brasília - IESB';
  const skills: string[] = ['Sass', 'Javascript', 'Typescript', 'React', 'git', 'Tailwind'];

  //write functions to generate strings for the strings with "" and arrays with ["",""]

  return (
    <div className="p-8 bg-gray-600 rounded-b-lg">
      <div />
      <div />
      asdsadsadsa
    </div>
  );
};

export default TerminalHeader;
