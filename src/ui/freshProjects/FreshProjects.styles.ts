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
    width: '90%',
    opacity: 0.5,

    [`@media (min-width: ${theme.breakpoints.xs}px)`]: {
      width: '80%',
    },
  },
}));

export const containerStyles: Styles = () => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const headerStyles: Styles = (theme) => ({
  ...theme.headings,
  fontSize: 32,
  marginTop: 2 * theme.spacing.xl,
  marginBottom: 0,
  textAlign: 'center',
  fontStyle: 'italic',
  [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
    ...theme.headings.sizes.h1,
  },
});
