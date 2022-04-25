import React from 'react';
import { NextPage } from 'next';

import { Hero } from '@/ui/hero/Hero';
import { HomeProps } from '@/app/home/Home.types';
import { FreshProjects } from '@/ui/freshProjects/FreshProjects';
import { useHomeStyles } from '@/app/home/Home.styles';

export const HomePage: NextPage<HomeProps> = ({ projects }: HomeProps) => {
  const { classes: c } = useHomeStyles();
  return (
    <div className={c.wrapper}>
      <Hero />
      <FreshProjects projects={projects} />
    </div>
  );
};
