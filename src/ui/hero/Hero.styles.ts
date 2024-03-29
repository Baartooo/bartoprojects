import { zIndexes } from '@/theme/theme';
import { Styles } from '@/theme/theme.types';

export const headerStyles: Styles = () => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '100vw',
  minHeight: '100vh',
});

export const logoWrapperStyles: Styles = (theme) => ({
  position: 'relative',
  width: 300,
  zIndex: zIndexes.homeLogo,
  [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
    width: 360,
  },
});

export const logoStyles: Styles = () => ({
  width: '100%',
  ['path']: {
    fill: '#ffffff',
  },
});

export const imageWrapperStyles: Styles = () => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: zIndexes.heroImage,
});

export const maskStyles: Styles = (theme) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  height: 80,
  width: '100%',
  background: `linear-gradient(180deg, rgb(44 46 51 / 0%) 0%, ${theme.colors.dark[5]} 100%)`,
});
