import React from 'react';
import Image from 'next/image';

import BPLogo from '@/assets/svg/T_text.svg';
import HeroImage from '@/assets/images/home-hero.jpg';

import { useHeroStyles } from './Hero.styles';

export const Hero = () => {
  const { classes: c } = useHeroStyles();
  return (
    <header className={c.header}>
      <div className={c.imageWrapper}>
        <Image layout={'fill'} src={HeroImage} alt={'trees covered by fog'} objectFit={'cover'} priority />
      </div>
      <div className={c.logoWrapper}>
        <BPLogo className={c.logo} />
      </div>
      <div className={c.mask} />
    </header>
  );
};
