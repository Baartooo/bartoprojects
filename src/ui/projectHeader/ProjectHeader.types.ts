import { RichTextContent } from 'contentful';

import { MediumType } from '@/lib/contentful/projects/projects.types';

export type ProjectHeaderProps = {
  name: string;
  description: RichTextContent;
  releaseDate: string;
  mediumType: MediumType;
  medium: string;
};
