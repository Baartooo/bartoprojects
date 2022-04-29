import { Asset } from 'contentful';

import { MediumType } from '@/lib/contentful/projects/projects.types';

export type CardProps = {
  name: string;
  slug: string;
  cover: Asset;
  releaseDate: string;
  mediumType: MediumType;
};
