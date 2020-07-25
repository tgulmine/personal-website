import * as React from 'react';
import './TerminalWindow.scss';
import data from '../../data/data.json';

interface IInfo {
  title: string;
  link: string;
}

const TerminalHeader: React.FC = () => {
  const name: string = data.info.name;
  const currentLocation: string = data.info.location;
  const contactInfo: IInfo[] = [
    {
      title: data.info.email,
      link: data.info.email_link
    },
    {
      title: 'github',
      link: data.info.git_link
    }
  ];

  const resume: IInfo = {
    title: data.info.pdf_title,
    link: data.info.pdf_link
  };
  const interests: string[] = data.info.interests;
  const education: string[] = data.info.education;
  const skills: string[] = data.info.skills;

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
    <div className="p-8 bg-terminal-window-bg rounded-b-lg flex flex-col text-lg font-monaco leading-normal">
      <div className="flex flex-col mb-6">
        <div className="flex text-terminal-window-white">
          <div className="mr-2 font-mulish">{'>'}</div>
          <div>{name}.currentLocation</div>
        </div>
        <div className="text-terminal-window-yellow">{getStringText(currentLocation)}</div>
      </div>
      <div className="flex flex-col mb-6">
        <div className="flex text-terminal-window-white">
          <div className="mr-2 font-mulish">{'>'}</div>
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
          <div className="mr-2 font-mulish">{'>'}</div>
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
          <div className="mr-2 font-mulish">{'>'}</div>
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
          <div className="mr-2 font-mulish">{'>'}</div>
          <div>{name}.education</div>
        </div>
        {education ? (
          <div className="flex text-terminal-window-yellow flex-wrap">
            [
            {education.map((ed: string, index: number) => (
              <div key={index} className={index === education.length - 1 ? '' : 'mr-2'}>
                {getArrayText(ed, index === education.length - 1)}
              </div>
            ))}
            ]
          </div>
        ) : null}
      </div>
      <div className="flex flex-col mb-6">
        <div className="flex text-terminal-window-white">
          <div className="mr-2 font-mulish">{'>'}</div>
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
        <div className="mr-2 font-mulish">{'>'}</div>
        <div className="terminal-anim w-3" />
      </div>
    </div>
  );
};

export default TerminalHeader;
