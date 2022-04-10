import React from 'react';
import { NextPage } from 'next';
import Image from 'next/image';

import { useHomeStyles } from '@/app/home/Home.styles';
import Hero from '@/assets/images/home-hero.jpg';
import BPLogo from '@/assets/svg/T_text.svg';

export const HomePage: NextPage = () => {
  const { classes: c } = useHomeStyles();
  return (
    <header className={c.header}>
      <div className={c.imageWrapper}>
        <Image
          layout={'fill'}
          width={Hero.width}
          height={Hero.height}
          src={Hero}
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
