import { createStyles } from '@mantine/core';

import { Styles } from '@/theme/types';

export const useFreshProjectsStyles = createStyles((theme) => ({
  projects: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: theme.spacing.xl,
  },

  separator: {
    marginTop: theme.spacing.md,
    marginBottom: 2 * theme.spacing.xl,
    height: 1,
    background: theme.white,
    maxWidth: 800,
    width: '100%',
    opacity: 0.5,
  },
}));

export const containerStyles: Styles = (theme) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const headerStyles: Styles = (theme) => ({
  ...theme.headings,
  ...theme.headings.sizes.h1,
  marginTop: 2 * theme.spacing.xl,
  marginBottom: 0,
  textAlign: 'center',
  fontStyle: 'italic',
});
