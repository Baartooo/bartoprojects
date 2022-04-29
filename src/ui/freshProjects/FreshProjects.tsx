import React from 'react';
import { Container, Text } from '@mantine/core';

import { FreshProjectsProps } from '@/ui/freshProjects/FreshProjects.types';
import { Card } from '@/ui/card/Card';
import { headerStyles, useFreshProjectsStyles } from '@/ui/freshProjects/FreshProjects.styles';

export const FreshProjects = ({ projects }: FreshProjectsProps) => {
  const { classes: c } = useFreshProjectsStyles();
  return (
    <Container size={'lg'}>
      <Text sx={headerStyles} component={'h1'}>
        Fresh projects
      </Text>
      <div className={c.projects}>
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
      </div>
    </Container>
  );
};
