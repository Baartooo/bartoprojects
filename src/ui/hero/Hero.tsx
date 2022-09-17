import React from 'react';
import Image from 'next/image';
import { Box } from '@mantine/core';

import BPLogo from '@/assets/svg/T_text.svg';
import HeroImage from '@/assets/images/home-hero.jpg';
import { headerStyles, imageWrapperStyles, logoStyles, logoWrapperStyles, maskStyles } from '@/ui/hero/Hero.styles';

export const Hero = () => {
  return (
    <Box component={'header'} sx={headerStyles}>
      <Box component={'div'} sx={imageWrapperStyles}>
        <Image layout={'fill'} src={HeroImage} alt={'trees covered by fog'} objectFit={'cover'} priority />
      </Box>
      <Box component={'div'} sx={logoWrapperStyles}>
        <Box component={BPLogo} sx={logoStyles} />
      </Box>
      <Box component={'div'} sx={maskStyles} />
    </Box>
  );
};
