import { createStyles } from '@mantine/core';

import { Styles } from '@/theme/types';

export const useFreshProjectsStyles = createStyles((theme) => ({
  projects: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: theme.spacing.xl,
  },
}));

export const headerStyles: Styles = (theme) => ({
  ...theme.headings,
  ...theme.headings.sizes.h1,
  marginTop: 2 * theme.spacing.xl,
  textAlign: 'center',
  fontStyle: 'italic',
});
