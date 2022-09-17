import { ReactNode } from 'react';

import { ContentfulProjects } from '@/lib/contentful/projects/projects.types';

export type FreshProjectsProps = {
  projects: ContentfulProjects;
  header: ReactNode;
};
