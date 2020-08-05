import React from 'react';
import './ProjectCard.scss';
import data from '../../data/data.json';
import imgReddit from '../../img/cardreddit1.png';
import imgPrime from '../../img/cardprime1.png';
import imgDog from '../../img/carddog1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

interface ProjectCardProps {
  index: number;
}

interface ProjectData {
  title: string;
  description: string;
  skills: string[];
  link_demo: string;
  link_git: string;
  img: string;
}

const ProjectCard: React.FC<ProjectCardProps> = props => {
  const { index } = props;
  const project: ProjectData = data.projects[index];
  const imgWidth: string = '330px'; //406px x=443.6*406/546 x=330
  const imgHeight: string = '443px'; //546px x=546*546/672 x=443.6
  const img = getImg();

  function getImg() {
    switch (index) {
      case 0:
        return imgReddit;
      case 1:
        return imgPrime;
      case 2:
        return imgDog;
    }
  }

  return (
    <div className="flex mt-10 md:mt-16 w-full bg-project-bg text-project-text rounded shadow-project-card lg:h-cardImg">
      <div
        className="hidden lg:block"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          width: imgWidth,
          height: imgHeight,
          minWidth: imgWidth,
          minHeight: imgHeight
        }}
      />
      <div className="flex flex-col p-8 lg:p-16">
        <div className="text-4xl font-medium mb-8">{project.title}</div>
        <div className="text-base mb-8 leading-relaxed break-words font-normal">{project.description}</div>
        <div className="flex flex-wrap font-mukta font-light">
          {project.skills &&
            project.skills.map((skill: string, index: number) => {
              return (
                <div key={index} className="px-2 py-1 rounded border-2 border-project-skill mr-3 mb-3 text-sm">
                  {skill}
                </div>
              );
            })}
        </div>
        <div className="flex justify-around md:justify-start font-mulish text-xs lg:text-sm font-bold">
          <a
            className="rounded md:mr-5 hover:m-2 bg-project-demo-bg hover:bg-project-demo-bg_hover
            text-project-demo-text py-2.5 px-3.5 shadow-project-button move-button"
            rel="noopener noreferrer"
            href={project.link_demo}
            target="_blank"
          >
            Live Demo
            <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-1" />
          </a>
          <a
            className="rounded bg-project-git-bg text-project-git-text
            hover:text-project-git-text_hover py-2.5 px-3.5 shadow-project-button move-button"
            rel="noopener noreferrer"
            href={project.link_git}
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} className="mr-1" />
            View Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
