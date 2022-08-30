import { Styles } from '@/theme/theme.types';

export const navigationStyles: Styles = (theme) => ({
  position: 'sticky',
  top: 0,
  height: 64,
  margin: 0,
  background: theme.colors.dark[7],
  color: theme.white,
});

export const containerStyles: Styles = () => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
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
