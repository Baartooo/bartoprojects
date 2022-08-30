import React from 'react';
import { Container, Text } from '@mantine/core';

import { FreshProjectsProps } from '@/ui/freshProjects/FreshProjects.types';
import { containerStyles, headerStyles, separatorStyles } from '@/ui/freshProjects/FreshProjects.styles';
import { Separator } from '@/ui/separator/Separator';
import { ProjectsList } from '@/ui/projectsList/ProjectsList';

export const FreshProjects = ({ projects }: FreshProjectsProps) => {
  return (
    <Container size={'lg'} sx={containerStyles}>
      <Text sx={headerStyles} component={'h1'}>
        Fresh projects
      </Text>
      <Separator sx={separatorStyles} />
      <ProjectsList projects={projects} />
    </Container>
  );
};
