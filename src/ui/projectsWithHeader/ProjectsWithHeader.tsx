import React from 'react';
import { Container, Text } from '@mantine/core';

import { FreshProjectsProps } from '@/ui/projectsWithHeader/ProjectsWithHeader.types';
import { containerStyles, headerStyles, separatorStyles } from '@/ui/projectsWithHeader/ProjectsWithHeader.styles';
import { Separator } from '@/ui/separator/Separator';
import { ProjectsList } from '@/ui/projectsList/ProjectsList';

export const ProjectsWithHeader = ({ projects, header }: FreshProjectsProps) => {
  return (
    <Container size={'lg'} sx={containerStyles}>
      <Text sx={headerStyles} component={'h1'}>
        {header}
      </Text>
      <Separator sx={separatorStyles} />
      <ProjectsList projects={projects} />
    </Container>
  );
};
