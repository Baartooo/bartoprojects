import React from 'react';
import Image from 'next/image';

import { useHeroStyles } from '@/ui/hero/Hero.styles';
import BPLogo from '@/assets/svg/T_text.svg';
import HeroImage from '@/assets/images/home-hero.jpg';

export const Hero = () => {
  const { classes: c } = useHeroStyles();
  return (
    <header className={c.header}>
      <div className={c.imageWrapper}>
        <Image
          layout={'fill'}
          width={HeroImage.width}
          height={HeroImage.height}
          src={HeroImage}
          alt={'trees covered by fog'}
          objectFit={'cover'}
          priority
        />
      </div>
      <div className={c.logoWrapper}>
        <BPLogo className={c.logo} />
      </div>
    </header>
  );
};
