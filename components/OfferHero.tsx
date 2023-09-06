'use client';
import React from 'react';
import shablon from '@/assets/images/shablon.png';
import shablondesktop from '@/assets/images/shablondesktop.png';
import Image from 'next/image';
import useMediaQuery from '@/hooks/useMediaQuery';
import Link from 'next/link';

function OfferHero() {
  const isMobile = useMediaQuery('(max-width: 648px)');

  return (
    <div className='offer_300 mt-4 flex h-[152px] w-full flex-col items-center justify-center gap-3 text-center text-white'>
      <div className='absolute'>
        <Image src={isMobile ? shablon : shablondesktop} alt='bg-takhfif' />
      </div>
      <p className='mt-2 text-4xl font-semibold md:mb-2 md:text-5xl'>پیشنهاد ویژه</p>
      <p className='text-xs font-black md:text-[14px]'>برای خرید های بالای ۳۰۰ هزار تومان</p>
      <Link
        className='z-50 cursor-pointer rounded-3xl bg-white px-4 py-1.5 text-xs font-extrabold text-[#F02D3C] md:text-[14px]'
        href='/shop'
      >
        <button>مشاهده محصولات</button>
      </Link>
    </div>
  );
}

export default OfferHero;
