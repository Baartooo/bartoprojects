import React from 'react';
import { Box, Container, Text } from '@mantine/core';

import { ProjectHeaderProps } from '@/ui/projectHeader/ProjectHeader.types';
import { Separator } from '@/ui/separator/Separator';
import {
  bottomSeparatorStyles,
  detailContentStyles,
  detailHeaderStyles,
  detailStyles,
  headerStyles,
} from '@/ui/projectHeader/ProjectHeader.styles';

export const ProjectHeader = ({ name, releaseDate, medium }: ProjectHeaderProps) => {
  return (
    <Container size={'lg'}>
      <Separator />
      <Text component={'h1'} sx={headerStyles}>
        {name}
      </Text>
      <Box component={'div'} sx={detailStyles}>
        <Text component={'h2'} sx={detailHeaderStyles}>
          Released
        </Text>
        <Text sx={detailContentStyles}>{releaseDate}</Text>
      </Box>
      <Box component={'div'} sx={detailStyles}>
        <Text component={'h2'} sx={detailHeaderStyles}>
          Medium
        </Text>
        <Text sx={detailContentStyles}>{medium}</Text>
      </Box>
      <Separator sx={bottomSeparatorStyles} />
    </Container>
  );
};
