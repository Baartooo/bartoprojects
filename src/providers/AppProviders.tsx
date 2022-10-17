import React from 'react';
import { NotificationsProvider } from '@mantine/notifications';

import { AppProvidersProps } from './AppProviders.types';
import { MantineProvider } from './mantineProvider/MantineProvider';

export const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <MantineProvider>
      <NotificationsProvider>{children}</NotificationsProvider>
    </MantineProvider>
  );
};
