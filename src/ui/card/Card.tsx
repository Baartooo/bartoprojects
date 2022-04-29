import React from 'react';
import { Paper, Text } from '@mantine/core';

import { CardProps } from '@/ui/card/Card.types';
import { nameStyles, releaseDateStyles, useCardStyles, wrapperStyles } from '@/ui/card/Card.styles';
import { Medium } from '@/ui/medium/Medium';

export const Card = ({ name, releaseDate, cover, slug, mediumType }: CardProps) => {
  const { classes: c } = useCardStyles();
  return (
    <Paper sx={wrapperStyles} p={'xl'}>
      <Text component={'h2'} sx={nameStyles}>
        {name}
      </Text>
      <Text component={'p'} sx={releaseDateStyles}>
        {releaseDate}
      </Text>
      <Medium type={mediumType} className={c.medium} />
    </Paper>
  );
};
