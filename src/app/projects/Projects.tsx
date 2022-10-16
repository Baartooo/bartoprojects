import React from 'react';

import { ProjectsProps } from '@/app/projects/Projects.types';
import { ProjectsWithHeader } from '@/ui/projectsWithHeader/ProjectsWithHeader';
import { Navigation } from '@/ui/navigation/Navigation';
import { Footer } from '@/ui/footer/Footer';

export const ProjectsPage = ({ projects }: ProjectsProps) => {
  return (
    <>
      <Navigation />
      <ProjectsWithHeader projects={projects} header={'All projects'} />
      <Footer />
    </>
  );
};
