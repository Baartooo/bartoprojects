import { Styles } from '@/theme/theme.types';

export const projectsStyles: Styles = (theme) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: theme.spacing.xl,
});

export const containerStyles: Styles = () => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const headerStyles: Styles = (theme) => ({
  fontFamily: theme.headings.fontFamily,
  fontWeight: theme.headings.fontWeight,
  fontSize: 32,
  marginTop: 2 * theme.spacing.xl,
  marginBottom: 0,
  textAlign: 'center',
  fontStyle: 'italic',
  [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
    ...theme.headings.sizes.h1,
  },
});
