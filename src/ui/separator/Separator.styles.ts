import { Styles } from '@/theme/theme.types';

export const separatorStyles: Styles = (theme) => ({
  marginTop: theme.spacing.md,
  marginBottom: 2 * theme.spacing.xl,
  height: 1,
  background: theme.white,
  width: '90%',
  opacity: 0.5,

  [`@media (min-width: ${theme.breakpoints.xs}px)`]: {
    width: '80%',
  },
});
