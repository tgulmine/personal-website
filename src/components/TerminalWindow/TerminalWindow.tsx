import * as React from 'react';
import './TerminalWindow.scss';

interface IInfo {
  title: string;
  link: string;
}

const TerminalHeader: React.FC = () => {
  const name: string = 'Thiago';
  const currentLocation: string = 'Brazil, Brasília - DF';
  const contactInfo: IInfo[] = [
    {
      title: 'tgulmine@gmail.com',
      link: 'mailto:tgulmine@gmail.com'
    },
    {
      title: 'github',
      link: 'https://github.com/tgulmine'
    }
  ];

  const resume: IInfo = {
    title: 'tgulmine.pdf',
    link: 'https://drive.google.com/file/d/1liCl-M31hGRxE5l-SbFM2ULQo5L5lUAZ'
  };
  const interests: string[] = ['coding', 'gaming', 'coffee', 'reading'];
  const education: string = 'Digital Games, Instituto de Educação Superior de Brasília - IESB';
  const skills: string[] = ['Sass', 'Javascript', 'Typescript', 'React', 'git', 'Tailwind'];

  //write functions to generate strings for the strings with "" and arrays with ["",""]

  function getStringText(str: string) {
    let newStr = '"' + str + '"';
    return newStr;
  }

  function getArrayText(str: string, isLast: boolean) {
    let newStr;
    if (isLast) newStr = '"' + str + '"';
    else newStr = '"' + str + '",';
    return newStr;
  }

  return (
    <div className="p-8 bg-terminal-window-bg rounded-b-lg flex flex-col tracking-wider text-lg font-mulish">
      <div className="flex flex-col mb-6">
        <div className="flex text-terminal-window-white">
          <div className="mr-2">{'>'}</div>
          <div>{name}.currentLocation</div>
        </div>
        <div className="text-terminal-window-yellow">{getStringText(currentLocation)}</div>
      </div>
      <div className="flex flex-col mb-6">
        <div className="flex text-terminal-window-white">
          <div className="mr-2">{'>'}</div>
          <div>{name}.contactInfo</div>
        </div>
        <div className="text-terminal-window-yellow flex flex-wrap">
          {contactInfo.map((cont: IInfo, index: number) => (
            <div key={index} className={index === interests.length - 1 ? '' : 'mr-2'}>
              {index === 0 ? '["' : '"'}
              <a className="text-terminal-window-blue" rel="noopener noreferrer" href={cont.link} target="_blank">
                {cont.title}
              </a>
              {index === contactInfo.length - 1 ? '"]' : '",'}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col mb-6">
        <div className="flex text-terminal-window-white">
          <div className="mr-2">{'>'}</div>
          <div>{name}.resume</div>
        </div>
        <div className="text-terminal-window-yellow">
          "
          <a className="text-terminal-window-blue" rel="noopener noreferrer" href={resume.link} target="_blank">
            {resume.title}
          </a>
          "
        </div>
      </div>
      <div className="flex flex-col mb-6">
        <div className="flex text-terminal-window-white">
          <div className="mr-2">{'>'}</div>
          <div>{name}.interests</div>
        </div>
        {interests ? (
          <div className="flex flex-wrap text-terminal-window-yellow">
            [
            {interests.map((int: string, index: number) => (
              <div key={index} className={index === interests.length - 1 ? '' : 'mr-2'}>
                {getArrayText(int, index === interests.length - 1)}
              </div>
            ))}
            ]
          </div>
        ) : null}
      </div>
      <div className="flex flex-col mb-6">
        <div className="flex text-terminal-window-white">
          <div className="mr-2">{'>'}</div>
          <div>{name}.education</div>
        </div>
        <div className="text-terminal-window-yellow">{getStringText(education)}</div>
      </div>
      <div className="flex flex-col mb-6">
        <div className="flex text-terminal-window-white">
          <div className="mr-2">{'>'}</div>
          <div>{name}.skills</div>
        </div>
        {skills ? (
          <div className="flex text-terminal-window-yellow flex-wrap">
            [
            {skills.map((skill: string, index: number) => (
              <div key={index} className={index === skills.length - 1 ? '' : 'mr-2'}>
                {getArrayText(skill, index === skills.length - 1)}
              </div>
            ))}
            ]
          </div>
        ) : null}
      </div>
      <div className="flex text-terminal-window-white mb-6">
        <div className="mr-2">{'>'}</div>
        <div className="terminal-anim w-2" />
      </div>
    </div>
  );
};

export default TerminalHeader;
