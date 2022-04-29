import { SVGProps } from 'react';

import { MediumType } from '@/lib/contentful/projects/projects.types';

export type MediumProps = {
  type: MediumType;
} & SVGProps<SVGElement>;
