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

export const themeOverride: MantineThemeOverride = {};
