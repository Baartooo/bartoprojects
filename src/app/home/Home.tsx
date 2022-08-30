import React from 'react';
import { NextPage } from 'next';
import { Box } from '@mantine/core';

import { Hero } from '@/ui/hero/Hero';
import { HomeProps } from '@/app/home/Home.types';
import { ProjectsWithHeader } from '@/ui/projectsWithHeader/ProjectsWithHeader';

export const HomePage: NextPage<HomeProps> = ({ projects }: HomeProps) => (
  <Box>
    <Hero />
    <ProjectsWithHeader projects={projects} header={'Fresh projects'} />
  </Box>
);
