import { Styles } from '@/theme/theme.types';

export const contentStyles: Styles = () => ({
  fontWeight: 300,
  fontSize: 16,
});

export const anchorStyles: Styles = (theme) => ({
  padding: '3px 8px',
  color: theme.colors.blue[5],
  fontWeight: 400,
  lineHeight: 1,
  textDecoration: 'none',
  backgroundColor: theme.colors.gray[9],
  borderRadius: theme.radius.md,
  transition: '100ms',
  ':hover': {
    backgroundColor: theme.colors.gray[8],
    textDecoration: 'none',
  },
});
