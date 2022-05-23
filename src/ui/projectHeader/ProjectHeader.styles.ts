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

export const descriptionStyles: Styles = (theme) => ({
  marginBottom: 2 * theme.spacing.xl,
});

export const detailStyles: Styles = (theme) => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: theme.spacing.xl,
  gap: theme.spacing.xs,
});

export const detailHeaderStyles: Styles = (theme) => ({
  fontFamily: theme.headings.fontFamily,
  fontWeight: theme.headings.fontWeight,
  fontSize: 24,
  fontStyle: 'italic',
  margin: 0,
  [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
    ...theme.headings.sizes.h2,
  },
});

export const detailRowStyles: Styles = (theme) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing.xs,
});

export const iconStyles: Styles = () => ({
  width: 24,
  height: 24,
});

export const detailContentStyles: Styles = () => ({
  fontSize: 16,
  fontWeight: 300,
});

export const bottomSeparatorStyles: Styles = (theme) => ({
  marginTop: theme.spacing.xl,
});
