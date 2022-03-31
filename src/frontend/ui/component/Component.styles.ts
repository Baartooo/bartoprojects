import { MantineTheme } from '@mantine/core';

import { Styles } from '@/theme/types';

export const box: Styles = (theme: MantineTheme) => ({
  '&:hover': {
    backgroundColor: theme.colors.red[5],
  },
});
