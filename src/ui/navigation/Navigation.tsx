import React from 'react';
import { Box, Container, Group, Navbar, Button } from '@mantine/core';
import Link from 'next/link';

import BPLogo from '@/assets/svg/T_text.svg';
import { navigationStyles, containerStyles, logoStyles } from '@/ui/navigation/Navigation.styles';
import { Route } from '@/routes/routes.types';
import { NavigationProps } from '@/ui/navigation/Navigation.types';

export const Navigation = ({ containerSize = 'md' }: NavigationProps) => {
  return (
    <Navbar height={30} sx={navigationStyles}>
      <Container size={containerSize} sx={containerStyles}>
        <Link href={Route.Home}>
          <Box component={BPLogo} sx={logoStyles} />
        </Link>
        <Group spacing={2}>
          <Link href={Route.Home}>
            <Button variant={'subtle'}>Home</Button>
          </Link>
          <Link href={Route.Projects}>
            <Button variant={'subtle'}>All projects</Button>
          </Link>
        </Group>
      </Container>
    </Navbar>
  );
};
