import React from 'react';
import { NextPage } from 'next';
import { Box, Button } from '@mantine/core';
import { TbArrowRight } from 'react-icons/tb';
import Link from 'next/link';

import { Hero } from '@/ui/hero/Hero';
import { HomeProps } from '@/app/home/Home.types';
import { ProjectsWithHeader } from '@/ui/projectsWithHeader/ProjectsWithHeader';
import { Route } from '@/routes/routes.types';

import { buttonStyles, buttonRowStyles } from './Home.styles';

export const HomePage: NextPage<HomeProps> = ({ projects }: HomeProps) => (
  <Box>
    <Hero />
    <ProjectsWithHeader projects={projects} header={'Fresh projects'} />
    <Box sx={buttonRowStyles}>
      <Link href={Route.Projects}>
        <Button variant={'subtle'} sx={buttonStyles} rightIcon={<TbArrowRight />} size={'lg'}>
          See more projects
        </Button>
      </Link>
    </Box>
  </Box>
);
