import React from 'react';

import { ProjectProps } from '@/app/project/Project.types';

export const ProjectPage = ({ project }: ProjectProps) => {
  return <>{project.fields.name}</>;
};
