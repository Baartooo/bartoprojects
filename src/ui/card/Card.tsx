import React from 'react';
import Image from 'next/image';
import { Box, Paper, Text } from '@mantine/core';
import { NextLink } from '@mantine/next';

import { CardProps } from '@/ui/card/Card.types';
import {
  detailsStyles,
  imageWrapperStyles,
  launchStyles,
  mediumStyles,
  nameStyles,
  releaseDateStyles,
  wrapperStyles,
} from '@/ui/card/Card.styles';
import { Medium } from '@/ui/medium/Medium';
import Launch from '@/assets/svg/launch.svg';
import { getProjectRoute } from '@/routes/routes';
import { getImageSrc } from '@/lib/contentful/contentful.utils';

export const Card = ({ name, releaseDate, cover, slug, mediumType }: CardProps) => {
  return (
    <Paper sx={wrapperStyles} p={'xl'}>
      <NextLink href={getProjectRoute(slug)}>
        <Box component={'div'} sx={imageWrapperStyles}>
          <Image
            layout={'fixed'}
            src={getImageSrc(cover.fields.file.url)}
            alt={cover.fields.title}
            width={320}
            height={480}
          />
        </Box>
        <Box component={'div'} sx={detailsStyles}>
          <Text component={'h2'} sx={nameStyles}>
            {name}
          </Text>
          <Text component={'p'} sx={releaseDateStyles}>
            {releaseDate}
          </Text>
          <Box component={Medium} type={mediumType} sx={mediumStyles} />
        </Box>
        <Box component={Launch} sx={launchStyles} />
      </NextLink>
    </Paper>
  );
};
