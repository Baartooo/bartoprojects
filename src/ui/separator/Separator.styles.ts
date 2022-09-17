import { Styles } from '@/theme/theme.types';

export const separatorStyles: Styles = (theme) => ({
  height: 1,
  background: theme.fn.linearGradient(90, 'rgb(255 255 255 / 0)', theme.white, 'rgb(255 255 255 / 0)'),
  width: '100%',
  opacity: 0.5,
});
