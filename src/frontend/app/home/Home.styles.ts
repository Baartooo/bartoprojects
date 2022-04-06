import { createStyles, MantineTheme } from '@mantine/core';

import { Styles } from '@/theme/types';

export const useHomeStyles = createStyles({
  logo: {
    fill: '#ffffff',
  },
});

export const paper: Styles = (theme: MantineTheme) => ({
  backgroundColor: theme.colors.dark[7],
  borderRadius: '0',
  minHeight: '100vh',
  color: theme.white,
});
