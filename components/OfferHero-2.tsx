'use client';
import React from 'react';
import shablon from '@/assets/images/shablon.png';
import shablondesktop from '@/assets/images/shablondesktop.png';
import Image from 'next/image';
import useMediaQuery from '@/hooks/useMediaQuery';
import Link from 'next/link';

function OfferHero2() {
  const isMobile = useMediaQuery('(max-width: 648px)');

  return (
    <div className='offer_300 mt-4  h-[380px] w-full  items-center justify-center gap-3 text-center text-white'>
      <Link className=' cursor-pointer ' href='/product/1'>
        <div className='absolute'>
          <Image src={isMobile ? shablon : shablondesktop} alt='bg-takhfif' />
        </div>
        <p className=' pt-8 text-3xl font-semibold md:mb-2 md:text-4xl'>خرید پک ویژه شب یلدا</p>
        <p className='text-1xl mt-16 font-semibold  md:mb-2 md:text-3xl'>شامل ۷ محصول متفاوت مخصوص شب یلدا </p>

        <p className='text-1.5xl mt-2 font-semibold md:mb-2 md:text-2xl'> هدیه ویژه : یک متر لواشک</p>
        <p className='text-1.5xl mt-2 font-semibold md:mb-2 md:text-2xl'> ارسال رایگان</p>
        <div className='absolute'>
          <Image src={isMobile ? shablon : shablondesktop} alt='bg-takhfif' />
        </div>
        <div className='mt-2 text-2xl font-semibold md:mb-2 md:text-3xl'>
          <p>قیمت پک کامل: ۷۰۰ هزار تومان</p>
          <p>قیمت تا شب یلدا: ۴۸۸ هزار تومان</p>
        </div>
        <button className='z-50 cursor-pointer rounded-3xl bg-white px-4 py-1.5 text-xs font-extrabold text-[#F02D3C] md:text-[14px]'>
          مشاهده محصولات
        </button>
      </Link>
    </div>
  );
}

export default OfferHero2;
