import { Styles } from '@/theme/theme.types';

export const separatorStyles: Styles = (theme) => ({
  width: '80%',
  marginTop: theme.spacing.md,
  marginBottom: 2 * theme.spacing.xl,
});

export const containerStyles: Styles = () => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const headerStyles: Styles = (theme) => ({
  fontFamily: theme.headings.fontFamily,
  fontWeight: 900,
  fontSize: 32,
  marginTop: 2 * theme.spacing.xl,
  marginBottom: 0,
  textAlign: 'center',
  fontStyle: 'italic',
  [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
    fontSize: theme.headings.sizes.h1.fontSize,
  },
});
