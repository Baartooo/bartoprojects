import React from 'react';
import { Box, Container, Text } from '@mantine/core';

import { FreshProjectsProps } from '@/ui/freshProjects/FreshProjects.types';
import { Card } from '@/ui/card/Card';
import {
  containerStyles,
  headerStyles,
  projectsStyles,
  separatorStyles,
} from '@/ui/freshProjects/FreshProjects.styles';
import { Separator } from '@/ui/separator/Separator';

export const FreshProjects = ({ projects }: FreshProjectsProps) => {
  return (
    <Container size={'lg'} sx={containerStyles}>
      <Text sx={headerStyles} component={'h1'}>
        Fresh projects
      </Text>
      <Separator sx={separatorStyles} />
      <Box component={'div'} sx={projectsStyles}>
        {projects.items.map(({ fields, sys }) => (
          <Card
            key={sys.id}
            name={fields.name}
            slug={fields.slug}
            cover={fields.cover}
            releaseDate={fields.releaseDate}
            mediumType={fields.mediumType}
          />
        ))}
      </Box>
    </Container>
  );
};
