import { Styles } from '@/theme/theme.types';

export const containerStyles: Styles = (theme) => ({
  marginTop: 2 * theme.spacing.xl,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 2 * theme.spacing.xl,
});
