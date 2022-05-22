import React from 'react';

import { ProjectProps } from '@/app/project/Project.types';
import { ProjectHeader } from '@/ui/projectHeader/ProjectHeader';

export const ProjectPage = ({ project }: ProjectProps) => {
  return (
    <ProjectHeader
      name={project.fields.name}
      description={project.fields.description}
      releaseDate={project.fields.releaseDate}
      mediumType={project.fields.mediumType}
      medium={project.fields.medium}
    />
  );
};
