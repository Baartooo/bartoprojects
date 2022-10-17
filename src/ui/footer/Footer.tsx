import React, { useEffect } from 'react';
import { Container, Footer as MantineFooter, Box, Anchor } from '@mantine/core';
import { TbCopy } from 'react-icons/tb';
import { useClipboard } from '@mantine/hooks';
import { showNotification } from '@mantine/notifications';

import { footerStyles, containerStyles, contentStyles, copyStyles } from '@/ui/footer/Footer.styles';
import { NavigationProps } from '@/ui/navigation/Navigation.types';

const EMAIL = 'bartoprojects@gmail.com';

export const Footer = ({ containerSize = 'md' }: NavigationProps) => {
  const { copy, copied } = useClipboard();

  const copyAndNotify = () => {
    copy(EMAIL);
  };

  useEffect(() => {
    if (copied) {
      showNotification({
        title: 'success',
        message: 'copied to clipboard',
        color: 'green',
      });
    }
  }, [copied]);

  return (
    <MantineFooter height={100} sx={footerStyles}>
      <Container size={containerSize} sx={containerStyles}>
        <Anchor href={`mailto:${EMAIL}`} sx={contentStyles}>
          bartoprojects@gmail.com
        </Anchor>
        <Box component={TbCopy} sx={copyStyles} onClick={copyAndNotify} />
      </Container>
    </MantineFooter>
  );
};
