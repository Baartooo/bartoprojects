import React from 'react';
import { NextPage } from 'next';

import { Hero } from '@/ui/hero/Hero.component';
import { HomeProps } from '@/app/home/Home.types';

export const HomePage: NextPage<HomeProps> = ({ projects }: HomeProps) => {
  return <Hero />;
};
