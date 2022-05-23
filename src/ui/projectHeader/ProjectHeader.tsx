import React from 'react';
import { Box, Container, Text } from '@mantine/core';

import { ProjectHeaderProps } from '@/ui/projectHeader/ProjectHeader.types';
import { Separator } from '@/ui/separator/Separator';
import {
  bottomSeparatorStyles,
  detailContentStyles,
  detailHeaderStyles,
  detailRowStyles,
  detailStyles,
  headerStyles,
  iconStyles,
} from '@/ui/projectHeader/ProjectHeader.styles';
import CalendarIcon from '@/assets/svg/calendar.svg';
import { Medium } from '@/ui/medium/Medium';

export const ProjectHeader = ({ name, releaseDate, medium, mediumType }: ProjectHeaderProps) => {
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
        <Box component={'div'} sx={detailRowStyles}>
          <Box component={CalendarIcon} sx={iconStyles} />
          <Text sx={detailContentStyles}>{releaseDate}</Text>
        </Box>
      </Box>
      <Box component={'div'} sx={detailStyles}>
        <Text component={'h2'} sx={detailHeaderStyles}>
          Medium
        </Text>
        <Box component={'div'} sx={detailRowStyles}>
          <Box component={Medium} sx={iconStyles} type={mediumType} />
          <Text sx={detailContentStyles}>{medium}</Text>
        </Box>
      </Box>
      <Separator sx={bottomSeparatorStyles} />
    </Container>
  );
};
