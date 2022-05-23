import { Asset, AssetCollection, Entry, EntryCollection } from 'contentful';
import { Document } from '@contentful/rich-text-types';

import { Locale } from '@/i18n/i18n.types';

export enum MediumType {
  Mobile = 'mobile',
  Analog = 'analog',
  DSLR = 'dslr',
}

export type Project = {
  name: string;
  slug: string;
  cover: Asset;
  releaseDate: string;
  mediumType: MediumType;
  medium: string;
  description: Document;
  images: AssetCollection;
};

export type ContentfulProjects = EntryCollection<Project>;
export type ContentfulProject = Entry<Project>;

export type Query = {
  locale: Locale;
  limit?: number;
  order?: string;
};

export type ProjectsInAllLanguages = Record<Locale, ContentfulProjects>;
