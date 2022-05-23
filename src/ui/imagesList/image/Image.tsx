import React from 'react';
import { Box } from '@mantine/core';
import NextImage from 'next/image';

import { ImageProps } from '@/ui/imagesList/image/Image.types';
import { wrapperStyles } from '@/ui/imagesList/image/Image.styles';
import { getImageSrc } from '@/lib/contentful/contentful.utils';

export const Image = ({ image }: ImageProps) => {
  return (
    <Box component={'div'} sx={wrapperStyles}>
      <NextImage
        src={getImageSrc(image.fields.file.url)}
        layout={'responsive'}
        width={image.fields.file.details.image?.width}
        height={image.fields.file.details.image?.height}
      />
    </Box>
  );
};
