import { Document } from '@contentful/rich-text-types';

import { MediumType } from '@/lib/contentful/projects/projects.types';

export type ProjectHeaderProps = {
  name: string;
  description?: Document;
  releaseDate: string;
  mediumType: MediumType;
  medium: string;
};
