import React from 'react';
import { NextPage } from 'next';
import { Box } from '@mantine/core';

import { Hero } from '@/ui/hero/Hero';
import { HomeProps } from '@/app/home/Home.types';
import { FreshProjects } from '@/ui/freshProjects/FreshProjects';

export const HomePage: NextPage<HomeProps> = ({ projects }: HomeProps) => (
  <Box>
    <Hero />
    <FreshProjects projects={projects} />
  </Box>
);
