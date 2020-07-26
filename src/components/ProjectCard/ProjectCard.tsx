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

  /* const [description, setDescription] = useState<string>('');
  const [descs, setDescs] = useState<string[]>(['']);
  const [links, setLinks] = useState<string[]>(['']); */

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

  /* useEffect(() => {
    if (project.description) {
      console.log('eff');
      setDescription(project.description);
      checkForLinks();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); */

  /* function checkForLinks() {
    for (let i = 0; i < 3; i++) {
      console.log('begin');
      console.log(project.description);
      //@ts-ignore
      console.log(project.description.search('!'));
      var a = project.description.search('!');
      console.log(a);
      if (a !== -1) {
        project.description.replace('!', '');
        var b = project.description.search('!');
        var link = project.description.slice(a, b);
        console.log(link);
        link.replace('!', '');
        var arrLinks = links;
        arrLinks.push(link);
        setLinks(arrLinks);
        var desc = description.slice(0, a - 1);
        var arrDescs = descs;
        arrDescs.push(desc);
        setDescs(arrDescs);
      }
    }
  } */

  return (
    <div
      className="flex mt-16 w-full bg-project-bg text-project-text rounded shadow-project-card"
      style={{
        height: imgHeight
      }}
    >
      <div
        className="hidden md:block"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          width: imgWidth,
          height: imgHeight,
          minWidth: imgWidth,
          minHeight: imgHeight
        }}
      />
      <div className="flex flex-col p-16">
        <div className="text-3xl font-semibold mb-8">{project.title}</div>
        <div className="text-base mb-8 leading-relaxed">{project.description}</div>
        <div className="flex mb-3">
          {project.skills &&
            project.skills.map((skill: string, index: number) => {
              return (
                <div key={index} className="px-2 py-1 rounded border-2 border-project-skill mr-3 text-sm">
                  {skill}
                </div>
              );
            })}
        </div>
        <div className="flex">
          <a
            className="rounded mr-5 hover:m-2 bg-project-demo-bg hover:bg-project-demo-bg_hover
            text-project-demo-text py-3 px-4 text-sm font-bold shadow-project-button move-button"
            rel="noopener noreferrer"
            href={project.link_demo}
            target="_blank"
          >
            Live Demo
            <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-1" />
          </a>
          <a
            className="rounded mr-5 bg-project-git-bg text-project-git-text
            hover:text-project-git-text_hover py-3 px-4 text-sm font-bold shadow-project-button move-button"
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
