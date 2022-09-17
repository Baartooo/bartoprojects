import { GetStaticPaths, GetStaticProps } from 'next';

import { ProjectPage } from '@/app/project/Project';
import { getProjects } from '@/lib/contentful/projects/projects';
import { Locale } from '@/i18n/i18n.types';
import { ProjectProps } from '@/app/project/Project.types';
import { cache } from '@/api';
import { ContentfulProjects, ProjectsInAllLanguages } from '@/lib/contentful/projects/projects.types';

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const projectsEntries: [Locale, ContentfulProjects][] = [];

  if (!ctx.locales) {
    throw Error('Locales not found');
  }
  const locales = ctx.locales as Locale[];

  for (const locale of locales) {
    projectsEntries.push([
      locale,
      await getProjects({
        locale,
        order: 'fields.releaseDate',
      }),
    ]);
  }

  const projects = projectsEntries.reduce<ProjectsInAllLanguages>((acc, curr) => {
    const [locale, projects] = curr;
    acc[locale] = projects;
    return acc;
  }, {} as ProjectsInAllLanguages);

  await cache.set(projects);

  const paths: { params: { slug: string }; locale: Locale }[] = locales.flatMap((locale) => {
    return projects[locale].items.map((project) => ({
      params: {
        slug: project.fields.slug,
      },
      locale,
    }));
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ProjectProps> = async (ctx) => {
  const slug = ctx.params?.slug;
  if (!slug) {
    throw Error(`Project's slug param was not provided by getStaticPath`);
  }

  const project = await cache.get(slug as string, ctx.locale as Locale);

  if (!project) {
    throw Error(`Failed to get project from cache`);
  }

  return {
    props: {
      project,
    },
  };
};
// eslint-disable-next-line import/no-default-export
export default ProjectPage;
