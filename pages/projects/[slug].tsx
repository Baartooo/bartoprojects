import React from 'react';
import { GetStaticPaths, GetStaticPathsResult, GetStaticProps } from 'next';

import { Project } from '@/app/project/Project';
import { getProjects } from '@/lib/contentful/projects/projects';
import { Locale } from '@/i18n/i18n.types';

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const projects = await getProjects({
    locale: Locale.Default,
    order: 'fields.releaseDate',
  });

  return {
    paths: projects.items.map((project) => ({
      params: {
        slug: project.fields.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params?.slug;
  if (!slug) {
    throw Error(`Project's slug param was not provided by getStaticPath`);
  }
  //todo: think about how to get project by slug or provide additionally id
};

export default Project;
