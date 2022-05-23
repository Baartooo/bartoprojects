import { contentful } from '../index';
import { ContentTypeID } from '@/lib/contentful/contentful.types';
import { ContentfulProjects, Query } from '@/lib/contentful/projects/projects.types';

export const getProjects = async ({ locale, order, limit }: Query): Promise<ContentfulProjects> => {
  try {
    return await contentful.getEntries({
      content_type: ContentTypeID.Project,
      limit,
      locale,
      order,
    });
  } catch (e) {
    throw Error('Fetching projects error');
  }
};
