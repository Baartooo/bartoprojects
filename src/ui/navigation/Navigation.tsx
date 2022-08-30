import React from 'react';
import { Box, Container, Group, Navbar, Button } from '@mantine/core';
import Link from 'next/link';

import BPLogo from '@/assets/svg/T_text.svg';
import { navigationStyles, containerStyles, logoStyles } from '@/ui/navigation/Navigation.styles';
import { Route } from '@/routes/routes.types';

export const Navigation = () => {
  return (
    <Navbar height={30} sx={navigationStyles}>
      <Container size={'lg'} sx={containerStyles}>
        <Link href={Route.Home}>
          <Box component={BPLogo} sx={logoStyles} />
        </Link>
        <Group spacing={2}>
          <Link href={Route.Home}>
            <Button variant={'subtle'}>home</Button>
          </Link>
          <Link href={Route.Projects}>
            <Button variant={'subtle'}>all projects</Button>
          </Link>
        </Group>
      </Container>
    </Navbar>
  );
};
