import { createStyles } from '@mantine/core';

export const useHomeStyles = createStyles({
  header: {
    width: '100vw',
    minHeight: '100vh',
    position: 'relative',
  },

  logo: {
    fill: '#ffffff',
  },

  imageWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,

    width: '100%',
    height: '100%',
  },
});
