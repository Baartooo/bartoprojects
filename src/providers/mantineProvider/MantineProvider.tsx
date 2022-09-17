import React from 'react';
import { Global } from '@mantine/core';
import { MantineProvider as StylesProvider } from '@mantine/core';

import { themeOverride } from '@/theme/theme';

import { MantineProviderProps } from './MantineProvider.types';

export const MantineProvider = ({ children }: MantineProviderProps) => {
  return (
    <StylesProvider withGlobalStyles withNormalizeCSS theme={themeOverride}>
      <Global
        styles={(theme) => ({
          '*, *::before, *::after': {
            boxSizing: 'border-box',
          },

          html: {
            padding: 0,
            margin: 0,
          },

          body: {
            ...theme.fn.fontStyles(),
            padding: 0,
            paddingBottom: theme.spacing.xl,
            margin: 0,
            backgroundColor: theme.colors.dark[5],
            color: theme.white,
          },
        })}
      />
      {children}
    </StylesProvider>
  );
};
