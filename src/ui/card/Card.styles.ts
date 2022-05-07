import { Styles } from '@/theme/theme.types';

export const wrapperStyles: Styles = (theme) => ({
  position: 'relative',
  width: 320,
  height: 480,
  backgroundColor: theme.black,
  borderRadius: theme.radius.md,
  transformOrigin: 'center',
  overflow: 'hidden',

  [`@media (min-width: ${theme.breakpoints.md}px)`]: {
    cursor: 'pointer',
    transition: '100ms',
    ['&:hover']: {
      transform: 'scale(1.01)',
      boxShadow: `0 0 10px rgb(0 0 0 / 35%)`,
    },

    'a > svg:last-child': {
      display: 'none',
    },
    '&:hover a > svg:last-child': {
      display: 'block',
    },
  },
  ['a']: {
    textDecoration: 'none',
  },
});

export const nameStyles: Styles = (theme) => ({
  fontFamily: theme.headings.fontFamily,
  fontWeight: theme.headings.fontWeight,
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

export const mediumStyles: Styles = (theme) => ({
  marginTop: 2 * theme.spacing.lg,
  width: 32,
  height: 32,
});

export const launchStyles: Styles = (theme) => ({
  position: 'absolute',
  right: theme.spacing.xl,
  top: theme.spacing.xl,
});

export const imageWrapperStyles: Styles = () => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 0,
});

export const detailsStyles: Styles = () => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  width: '100%',
  height: '100%',
});
