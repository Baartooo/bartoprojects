import { Styles } from '@/theme/theme.types';

export const projectsStyles: Styles = (theme) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: theme.spacing.xl,
});

export const stayTunedStyles: Styles = () => ({
  marginBottom: 32,
  fontWeight: 'bolder',
  textAlign: 'center',
});
