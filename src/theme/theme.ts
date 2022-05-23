import { MantineThemeOverride } from '@mantine/styles/lib/theme/types';

const above = 1;
const below = -1;
const base = 0;

const heroImage = base;
const homeLogo = above + heroImage;

export const zIndexes = {
  heroImage,
  homeLogo,
};

export const themeOverride: MantineThemeOverride = {
  fontFamily: 'Inter, sans-serif',
  headings: {
    fontFamily: 'Nunito Sans, sans-serif',
    fontWeight: 900,
    sizes: {
      h1: {
        fontSize: 40,
      },
      h2: {
        fontSize: 32,
      },
    },
  },
};
