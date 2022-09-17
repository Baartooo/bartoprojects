import { Styles } from '@/theme/theme.types';

export const containerStyles: Styles = (theme) => ({
  marginTop: 2 * theme.spacing.xl,
});

export const headerStyles: Styles = (theme) => ({
  fontFamily: theme.headings.fontFamily,
  fontWeight: 900,
  fontSize: 32,
  marginTop: theme.spacing.sm,
  marginBottom: 0,
  fontStyle: 'italic',
  [theme.fn.largerThan('sm')]: {
    fontSize: theme.headings.sizes.h1.fontSize,
  },
});

export const descriptionStyles: Styles = (theme) => ({
  marginBottom: 2 * theme.spacing.xl,
});

export const detailStyles: Styles = (theme) => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: theme.spacing.xl,
});

export const detailHeaderStyles: Styles = (theme) => ({
  fontFamily: theme.headings.fontFamily,
  fontWeight: 900,
  fontSize: 24,
  fontStyle: 'italic',
  margin: 0,
  [theme.fn.largerThan('sm')]: {
    fontSize: theme.headings.sizes.h2.fontSize,
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
