import { MantineTheme } from '@mantine/core';

import { Styles } from '@/theme/types';

export const paper: Styles = (theme: MantineTheme) => ({
  backgroundColor: theme.colors.dark[7],
  borderRadius: '0',
  minHeight: '100vh',
  color: theme.white,
});
