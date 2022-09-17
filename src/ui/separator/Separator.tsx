import React from 'react';
import { Box } from '@mantine/core';

import { separatorStyles } from '@/ui/separator/Separator.styles';
import { SeparatorProps } from '@/ui/separator/Separator.types';

export const Separator = ({ sx = {} }: SeparatorProps) => <Box component={'div'} sx={[separatorStyles, sx]} />;
