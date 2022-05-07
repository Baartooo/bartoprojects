import { createStyles } from '@mantine/core';

import { Styles } from '@/theme/types';

export const useCardStyles = createStyles((theme) => ({
  medium: {
    marginTop: 2 * theme.spacing.lg,
    width: 32,
    height: 32,
  },

  launchIcon: {
    position: 'absolute',
    right: theme.spacing.md,
    top: theme.spacing.md,
    path: {
      fill: theme.white,
    },
  },
}));

export const wrapperStyles: Styles = (theme) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  width: 320,
  height: 480,
  backgroundColor: theme.black,
  borderRadius: theme.radius.md,
  transformOrigin: 'center',

  [`@media (min-width: ${theme.breakpoints.md}px)`]: {
    cursor: 'pointer',
    transition: '100ms',
    ['&:hover']: {
      transform: 'scale(1.01)',
      boxShadow: `0 0 10px rgb(0 0 0 / 35%)`,
    },

    '> svg:last-child': {
      display: 'none',
    },
    '&:hover > svg:last-child': {
      display: 'block',
    },
  },
});

export const nameStyles: Styles = (theme) => ({
  ...theme.headings,
  margin: 0,
  color: theme.white,
  fontSize: 24,
});

export const releaseDateStyles: Styles = (theme) => ({
  margin: 0,
  marginTop: theme.spacing.xs,
  fontWeight: '300',
  color: theme.white,
});
