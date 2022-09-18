import React from 'react';
import { Box, Container } from '@mantine/core';

import { iFrameStyles, wrapperStyles } from '@/ui/video/Video.styles';
import { VideoProps } from '@/ui/video/Video.types';
import { getYouTubeIframeSrc } from '@/ui/video/Video.utils';

export const Video = ({ videoCode }: VideoProps) => {
  return (
    <Container size={'md'} sx={wrapperStyles}>
      <Box component={'iframe'} src={getYouTubeIframeSrc(videoCode)} sx={iFrameStyles} />
    </Container>
  );
};
