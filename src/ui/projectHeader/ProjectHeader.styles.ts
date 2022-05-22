import { Styles } from '@/theme/theme.types';

export const headerStyles: Styles = (theme) => ({
  fontFamily: theme.headings.fontFamily,
  fontWeight: theme.headings.fontWeight,
  fontSize: 32,
  marginTop: theme.spacing.sm,
  marginBottom: 0,
  fontStyle: 'italic',
  [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
    ...theme.headings.sizes.h1,
  },
});
