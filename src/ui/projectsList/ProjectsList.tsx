import React from 'react';
import { Box } from '@mantine/core';

import { ProjectsListProps } from '@/ui/projectsList/ProjectsList.types';
import { Card } from '@/ui/card/Card';
import { projectsStyles, stayTunedStyles } from '@/ui/projectsList/ProjectsList.styles';

export const ProjectsList = ({ projects }: ProjectsListProps) => {
  return (
    <Box component={'div'} sx={projectsStyles}>
      {!projects.items.length && (
        <Box component={'p'} sx={stayTunedStyles}>
          Unfortunately there are no projects yet here, but stay tuned and come back in some time
        </Box>
      )}
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
  );
};
