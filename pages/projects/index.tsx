import { GetStaticProps } from 'next';

import { getProjects } from '@/lib/contentful/projects/projects';
import { Locale } from '@/i18n/i18n.types';
import { ProjectsProps } from '@/app/projects/Projects.types';
import { ProjectsPage } from '@/app/projects/Projects';

export const getStaticProps: GetStaticProps<ProjectsProps> = async (ctx) => {
  const projects = await getProjects({
    locale: ctx.locale as Locale,
    order: 'fields.releaseDate',
  });

  return {
    props: {
      projects,
    },
  };
};

// eslint-disable-next-line import/no-default-export
export default ProjectsPage;
