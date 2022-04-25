import { Asset, AssetCollection, EntryCollection, RichTextContent } from 'contentful';

import { Locale } from '@/i18n/i18n.types';

export enum MediumType {
  Mobile = 'mobile',
  Analog = 'analog',
  DSLR = 'dslr',
}

type Project = {
  name: string;
  slug: string;
  cover: Asset;
  releaseDate: string;
  mediumType: MediumType;
  medium: string;
  description: RichTextContent;
  images: AssetCollection;
};

export type ContentfulProjects = EntryCollection<Project>;

export type Query = {
  locale: Locale;
  limit?: number;
  order?: string;
};
