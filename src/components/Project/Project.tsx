import * as React from 'react';
import { ProjectCard } from '../ProjectCard';
import data from '../../data/data.json';

const Project: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-24">
      <div className="text-section-title text-2xl font-medium">Projects</div>
      <div className="mt-6 border-b-8 border-section-border w-16" />
      {data &&
        data.projects.map((_project: any, index: number) => {
          return <ProjectCard index={index} />;
        })}
    </div>
  );
};

export default Project;
