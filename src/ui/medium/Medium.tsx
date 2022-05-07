import React, { FC } from 'react';

import Analog from '@/assets/svg/analog.svg';
import DSLR from '@/assets/svg/dslr.svg';
import Mobile from '@/assets/svg/mobile.svg';
import { MediumProps } from '@/ui/medium/Medium.types';
import { MediumType } from '@/lib/contentful/projects/projects.types';

const iconMap: Record<MediumType, FC> = {
  [MediumType.Analog]: Analog,
  [MediumType.Mobile]: Mobile,
  [MediumType.DSLR]: DSLR,
};

export const Medium = ({ type, ...rest }: MediumProps) => {
  const Icon = iconMap[type];
  return <Icon {...rest} />;
};
