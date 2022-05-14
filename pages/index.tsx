import { GetStaticProps } from 'next';

import { HomePage } from '@/app/home/Home';
import { getProjects } from '@/lib/contentful/projects/projects';
import { Locale } from '@/i18n/i18n.types';
import { ContentfulProjects } from '@/lib/contentful/projects/projects.types';
import { HomeProps } from '@/app/home/Home.types';

export const getStaticProps: GetStaticProps = async (ctx) => {
  const projects = await getProjects({
    locale: ctx.locale as Locale,
    limit: 3,
    order: 'fields.releaseDate',
  });
  const props: HomeProps = {
    projects,
  };

  return {
    props,
  };
};
export default HomePage;
