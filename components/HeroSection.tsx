'use client';
import useMediaQuery from '@/hooks/useMediaQuery';
import {baseUrl} from '@/lib/config';
import useComponents from '@/service/settings/useComponents';
import React from 'react';

type HeroSectionProps = {};

const HeroSection: React.FC<HeroSectionProps> = () => {
  const isMobile = useMediaQuery('(max-width: 648px)');
  const {data} = useComponents();

  return (
    <div className='mt-10 flex items-center justify-center md:mt-0'>
      <img src={baseUrl + data?.data[0].picture} alt='ajil shab eyd picture' className=' h-[321px] md:h-[532px]' />
    </div>
  );
};
export default HeroSection;
