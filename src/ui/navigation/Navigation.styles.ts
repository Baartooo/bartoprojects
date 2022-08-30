import { Styles } from '@/theme/theme.types';

export const navigationStyles: Styles = (theme) => ({
  height: 64,
  margin: 0,
  background: 'transparent',
  color: theme.white,
});

export const containerStyles: Styles = () => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '100%',
});

export const logoStyles: Styles = () => ({
  height: '70%',
  cursor: 'pointer',
  ['path']: {
    fill: '#ffffff',
  },
});
