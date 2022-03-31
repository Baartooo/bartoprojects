import React from 'react';
import { NextPage } from 'next';
import { Paper } from '@mantine/core';

import { paper } from '@/app/home/Home.styles';

export const HomePage: NextPage = () => {
  return <Paper sx={paper}>hi</Paper>;
};
