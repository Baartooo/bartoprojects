import React from 'react';
import { Container } from '@mantine/core';

import { ImagesProps } from '@/ui/imagesList/ImagesList.types';
import { containerStyles } from '@/ui/imagesList/ImagesList.styles';

export const ImagesList = ({ images }: ImagesProps) => {
  return (
    <Container size={'lg'} sx={containerStyles}>
      {images.map((image) => (
        <>elo</>
      ))}
    </Container>
  );
};
