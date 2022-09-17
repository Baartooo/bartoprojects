import React from 'react';

import { AppProvidersProps } from './AppProviders.types';
import { MantineProvider } from './mantineProvider/MantineProvider';

export const AppProviders = ({ children }: AppProvidersProps) => {
  return <MantineProvider>{children}</MantineProvider>;
};
