import React from 'react';
import { Container } from '@mantine/core';

import { FreshProjectsProps } from '@/ui/freshProjects/FreshProjects.types';
import { Card } from '@/ui/card/Card';
import { containerStyles } from '@/ui/freshProjects/FreshProjects.styles';

export const FreshProjects = ({ projects }: FreshProjectsProps) => {
  return (
    <Container sx={containerStyles} size={'lg'}>
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
    </Container>
  );
};
