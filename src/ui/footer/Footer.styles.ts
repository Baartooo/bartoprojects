import { Styles } from '@/theme/theme.types';

export const footerStyles: Styles = (theme) => ({
  position: 'sticky',
  top: 0,
  height: 64,
  marginTop: 32,
  background: theme.colors.dark[6],
  color: theme.white,
});

export const containerStyles: Styles = (theme) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  gap: theme.spacing.xs,
});

export const contentStyles: Styles = () => ({
  fontWeight: 300,
});

export const copyStyles: Styles = () => ({
  height: 24,
  width: 24,
  cursor: 'pointer',
  ':hover': {
    opacity: 0.7,
  },
});
