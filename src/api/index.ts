import { promises as fs } from 'fs';
import path from 'path';

import { ContentfulProject, ProjectsInAllLanguages } from '@/lib/contentful/projects/projects.types';
import { Locale } from '@/i18n/i18n.types';

export const cache = {
  get: async (slug: string, locale: Locale): Promise<ContentfulProject | null | undefined> => {
    const data = await fs.readFile(path.join(process.cwd(), 'projects.db.json'));
    const projects: ProjectsInAllLanguages = JSON.parse(data as unknown as string);
    return projects[locale].items.find((project) => project.fields.slug === slug);
  },
  set: async (projects: ProjectsInAllLanguages) => {
    return await fs.writeFile(path.join(process.cwd(), 'projects.db.json'), JSON.stringify(projects));
  },
};
