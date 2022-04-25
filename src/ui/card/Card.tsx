import React from 'react';
import { Paper } from '@mantine/core';

import { CardProps } from '@/ui/card/Card.types';
import { wrapperStyles } from '@/ui/card/Card.styles';

export const Card = ({}: CardProps) => {
  return <Paper sx={wrapperStyles}>card</Paper>;
};
