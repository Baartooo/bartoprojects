import React from 'react';

import { ProjectProps } from '@/app/project/Project.types';
import { ProjectHeader } from '@/ui/projectHeader/ProjectHeader';
import { ImagesList } from '@/ui/imagesList/ImagesList';
import { Navigation } from '@/ui/navigation/Navigation';

export const ProjectPage = ({ project }: ProjectProps) => {
  return (
    <>
      <Navigation />
      <ProjectHeader
        name={project.fields.name}
        description={project.fields.description}
        releaseDate={project.fields.releaseDate}
        mediumType={project.fields.mediumType}
        medium={project.fields.medium}
      />
      <ImagesList images={project.fields.images} />
    </>
  );
};
