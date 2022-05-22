import React from 'react';
import { Container, Text } from '@mantine/core';

import { ProjectHeaderProps } from '@/ui/projectHeader/ProjectHeader.types';
import { Separator } from '@/ui/separator/Separator';
import { headerStyles } from '@/ui/projectHeader/ProjectHeader.styles';

export const ProjectHeader = ({ name }: ProjectHeaderProps) => {
  return (
    <Container size={'lg'}>
      <Separator />
      <Text component={'h1'} sx={headerStyles}>
        {name}
      </Text>
    </Container>
  );
};
