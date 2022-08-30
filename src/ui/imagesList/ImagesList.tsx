import React from 'react';
import { Container } from '@mantine/core';

import { ImagesProps } from '@/ui/imagesList/ImagesList.types';
import { containerStyles } from '@/ui/imagesList/ImagesList.styles';
import { Image } from '@/ui/imagesList/image/Image';

export const ImagesList = ({ images }: ImagesProps) => {
  return (
    <Container size={'md'} sx={containerStyles}>
      {images.map((image) => (
        // todo: alt text
        // eslint-disable-next-line jsx-a11y/alt-text
        <Image image={image} key={image.sys.id} />
      ))}
    </Container>
  );
};
