import { createStyles } from '@mantine/core';

import { zIndexes } from '@/theme/theme';

export const useHomeStyles = createStyles({
  header: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    minHeight: '100vh',
  },

  logoWrapper: {
    position: 'relative',
    width: 440,
    zIndex: zIndexes.homeLogo,
  },

  logo: {
    width: '100%',
    ['path']: {
      fill: '#ffffff',
    },
  },

  imageWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,

    width: '100%',
    height: '100%',
    zIndex: zIndexes.heroImage,
  },
});
