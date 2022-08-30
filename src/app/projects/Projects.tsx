import React from 'react';

import { ProjectsProps } from '@/app/projects/Projects.types';
import { ProjectsWithHeader } from '@/ui/projectsWithHeader/ProjectsWithHeader';

export const ProjectsPage = ({ projects }: ProjectsProps) => {
  return (
    <>
      <ProjectsWithHeader projects={projects} header={'All projects'} />
    </>
  );
};
