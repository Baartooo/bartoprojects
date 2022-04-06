import React from 'react';
import { NextPage } from 'next';
import { Paper } from '@mantine/core';

import { paper, useHomeStyles } from '@/app/home/Home.styles';
import TLogo from '@/assets/svg/T_text.svg';

export const HomePage: NextPage = () => {
  const { classes } = useHomeStyles();

  return (
    <Paper sx={paper}>
      <TLogo className={classes.logo} />
    </Paper>
  );
};
