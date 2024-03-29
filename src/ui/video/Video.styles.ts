import { Styles } from '@/theme/theme.types';

export const wrapperStyles: Styles = (theme) => ({
  marginTop: 48,
  width: '100%',
  height: '52vw',
  [theme.fn.largerThan('md')]: {
    height: 522,
  },
});

export const iFrameStyles: Styles = () => ({
  width: '100%',
  height: '100%',
  border: 0,
});
